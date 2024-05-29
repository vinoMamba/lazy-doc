import { FileTreeButton } from "./file-tree-button"
import { getToken } from "@/lib/token"
import { Oops } from "@/components/oops"
import { FileTreeWrapper } from "./file-tree-wrapper"

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
    return (
      <div className="w-[280px] h-full flex flex-col gap-2 px-2">
        <FileTreeButton />
        <FileTreeWrapper tree={list} projectId={projectId} />
      </div>
    )
  } else {
    return <Oops />
  }

}
