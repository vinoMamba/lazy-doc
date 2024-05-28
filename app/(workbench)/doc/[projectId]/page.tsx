import { FileTree } from "@/components/doc/file-tree";
import { Editor } from "@/components/editor";

export default function DocPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="h-full flex items-center gap-4">
      <FileTree projectId={params.projectId} />
    </div>
  )
}
