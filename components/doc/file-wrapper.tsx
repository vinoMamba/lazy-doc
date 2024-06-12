"use client"

import { useFileItem } from "@/hooks/use-file-item"
import { Editor } from "@/components/editor"
import { useEffect, useState } from "react"
import { JSONContent } from "novel"
import useSWR from "swr"

export const FileWrapper = () => {
  const [currentItem] = useFileItem(s => [s.currentItem])
  const [content, setContent] = useState<JSONContent>({})
  const { data } = useSWR(
    currentItem?.id ? `/api/doc?docId=${currentItem.id}` : null,
    (url) => fetch(url).then(res => res.json())
  )

  useEffect(() => {
    if (data && data.content) {
      const jsonContent = JSON.parse(data.content)
      setContent(jsonContent)
    }else{
      setContent({})
    }
  }, [data])

  if (!currentItem) {
    return <div>select one file</div>
  } else {
    return (
      <div className="w-full flex flex-col">
        <h6 className="text-2xl font-semibold w-full text-center py-4 border rounded-tl-md rounded-tr-md">
          {currentItem?.name}
        </h6>
        <Editor
          className=" border border-t-0 rounded-bl-md rounded-br-md  flex-1"
          data={content}
        />
      </div>
    )
  }
}
