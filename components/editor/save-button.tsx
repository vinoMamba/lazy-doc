"use client"
import { addDocAction } from "@/action/add-doc"
import { Button } from "@/components/ui/button"
import { useAction } from "@/hooks/use-action"
import { useFileItem } from "@/hooks/use-file-item"
import { AddDocSchema } from "@/schema/doc"
import { useEditor } from "novel"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { z } from "zod"

export const SaveButton = () => {
  const [buttonText, setButtonText] = useState("Edit")
  const { editor } = useEditor()
  const [currentItem] = useFileItem(s => [s.currentItem])

  useEffect(() => {
    if (editor) {
      editor.setEditable(false)
      setButtonText("Edit")
    }
  }, [editor, currentItem])

  const { execute } = useAction<z.infer<typeof AddDocSchema>, null>(addDocAction, {
    onSuccess: () => {
      editor?.setEditable(false)
      setButtonText("Edit")
      toast.success("Successfully updated.")
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  const handleAdd = () => {
    if (editor && currentItem) {
      if (editor.isEditable) {
        execute({
          docId: currentItem?.id,
          docContent: JSON.stringify(editor.getJSON())
        })
      } else {
        editor.setEditable(true)
        setButtonText("Save")
      }
    }
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={handleAdd}
    >{buttonText}</Button>
  )
}
