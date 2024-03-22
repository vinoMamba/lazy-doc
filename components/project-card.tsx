import { Project } from "@prisma/client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { getDate } from "@/lib/date"
import { CalendarDays, Layers, PencilLine } from "lucide-react"
import { Button } from "./ui/button"
import { EditProjectButton } from "./edit-project-button"
import { DeleteProjectButton } from "./delete-project-button"

type Props = {
  project: Project
}
export const ProjectCard = ({ project }: Props) => {
  return (
    <Card key={project.id} className="hover:bg-muted cursor-pointer group">
      <CardHeader>
        <CardTitle className=" flex items-center gap-x-2">
          <Layers className="w-4 h-4" />
          <span className="group-hover:scale-110 transition duration-300 origin-left">{project.projectName}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className=" space-y-2">
        <CardDescription className=" flex items-center gap-x-2">
          <CalendarDays className=" w-4 h-4" />
          {getDate(project.createdAt)}
        </CardDescription>
        <CardDescription className=" flex items-center gap-x-2">
          <PencilLine className=" w-4 h-4" />
          {project.description || "No description"}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center">
        <Button size="sm" variant="link">View</Button>
        <EditProjectButton projectId={project.id} />
        <DeleteProjectButton project={project} />
      </CardFooter>
    </Card>
  )
}
