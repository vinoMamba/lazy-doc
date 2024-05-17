import { Members } from "@/components/project/members"
import { ProjectEditForm } from "@/components/project/project-edit-form"
import { Separator } from "@/components/ui/separator"

export default async function ProjectEditPage({ params }: { params: { projectId: string } }) {
  return (
    <div className="w-full h-full space-y-4">
      <ProjectEditForm projectId={params.projectId} />
      <Separator/>
      <Members projectId={params.projectId} />
    </div>
  )
}
