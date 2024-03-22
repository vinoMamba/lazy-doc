import { EmptyProject } from "@/components/empty-project";
import { getAllProjects } from "@/data/project";

export default async function AllProjectPage() {
  const projects = await getAllProjects();
  if (projects.length === 0) {
    return <EmptyProject />
  }
  return (
    <div>
      All Project Page
    </div>
  )
}
