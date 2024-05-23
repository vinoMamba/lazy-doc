import { Editor } from "@/components/editor";

export default function DocPage({ params }: { params: { projectId: string } }) {
  return (
    <div>
      <Editor />
    </div>
  )
}
