import { FileTree } from "@/components/doc/file-tree";
import { FileWrapper } from "@/components/doc/file-wrapper";

export default function DocPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="h-full flex gap-4">
      <FileTree projectId={params.projectId} />
      <FileWrapper />
    </div>
  )
}
