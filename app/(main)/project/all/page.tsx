import { EmptyProject } from "@/components/empty-project";
import { ProjectCard } from "@/components/project-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAllProjects } from "@/data/project";

export default async function AllProjectPage() {
  const projects = await getAllProjects();
  if (projects.length === 0) {
    return <EmptyProject />
  }
  return (
    <ScrollArea className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </ScrollArea>
  )
}
