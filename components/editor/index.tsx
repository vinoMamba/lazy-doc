"use client"
import "./prosemirror.css"
import { EditorBubble, EditorCommand, EditorCommandEmpty, EditorCommandItem, EditorCommandList, EditorContent, EditorRoot, JSONContent, EditorInstance } from "novel";
import { useEffect, useState } from "react";
import { defaultExtensions } from "./extentions";
import { slashCommand, suggestionItems } from "./slash-command";
import { handleCommandNavigation } from "novel/extensions";
import { Separator } from "@/components/ui/separator";
import { NodeSelector } from "./node-selector";
import { TextButtons } from "./text-buttons";
import { cn } from "@/lib/utils";
import { SaveButton } from "./save-button";

const extentions = [...defaultExtensions, slashCommand]

type Props = {
  className?: string
  data: JSONContent
}

export const Editor = ({ className, data }: Props) => {
  const [editor, setEditor] = useState<EditorInstance | null>(null)
  const [openNode, setOpenNode] = useState(false);
  const [content, setContent] = useState<JSONContent>({})

  useEffect(() => {
    if (!editor) return
    editor.commands.setContent(data)
  }, [data])


  return (
    <EditorRoot>
      <EditorContent
        className={cn('bg-background relative', className)}
        extensions={extentions}
        initialContent={content}
        onCreate={({ editor }) => setEditor(editor)}
        onUpdate={({ editor }) => {
          const json = editor.getJSON()
          setContent(json)
        }}
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          attributes: {
            class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
          }
        }}
      >
        <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
          <EditorCommandEmpty className="px-2 text-muted-foreground">
            No results
          </EditorCommandEmpty>
          <EditorCommandList>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item.command?.(val)}
                className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                key={item.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommandList>
        </EditorCommand>
        <EditorBubble
          tippyOptions={{ placement: "top" }}
          className="flex w-fit max-w-[90vw] overflow-hidden rounded-md border border-muted bg-background shadow-xl"
        >
          <Separator orientation="vertical" />
          <NodeSelector open={openNode} onOpenChange={setOpenNode} />
          <Separator orientation="vertical" />
          <TextButtons />
        </EditorBubble>
        <div className="absolute right-4 top-4">
          <SaveButton/>
        </div>
      </EditorContent>
    </EditorRoot>
  )
}
