import { FileTreeButton } from "./file-tree-button"
import { z } from "zod"
import { FileItemSchema } from "@/schema/file"
import { getToken } from "@/lib/token"
import { Oops } from "@/components/oops"
import { listToTree } from "@/lib/shared"
import { FileTreeWrapper } from "./file-tree-wrapper"

type FileItem = z.infer<typeof FileItemSchema>
type FileTreeItem = FileItem & { children?: FileItem[] }
type Props = {
  projectId: string
}

export const FileTree = async ({ projectId }: Props) => {
  const token = await getToken()

  if (!token) {
    return <Oops />
  }

  const res = await fetch(`${process.env.NEXT_API_URL}/project/item/list?projectId=${projectId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    next: {
      tags: ['fileItem']
    }
  })

  const result = await res.json()

  if (result && result.code === 0) {
    const list = result.data || []
    const tree = listToTree(list) as FileTreeItem[]
    return (
      <div className="w-[280px] h-full flex flex-col gap-2 px-2">
        <FileTreeButton />
        <FileTreeWrapper tree={tree} projectId={projectId} />
      </div>
    )
  } else {
    return <Oops />
  }

}
