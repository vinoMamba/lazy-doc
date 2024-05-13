import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { z } from "zod"
import { getFirstLetter } from "@/lib/shared";
import { CalendarDays, PencilLine } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { ProjectSchema } from "@/schema/project";
import { formatDate } from "@/lib/date";
import { EditProjectButton } from "./edit-project-button";

type Props = {
  project: z.infer<typeof ProjectSchema>
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="group">
      <CardHeader>
        <div className=" flex items-center gap-x-2">
          <Avatar>
            <AvatarImage src={""} />
            <AvatarFallback>
              {getFirstLetter(project.projectName)}
            </AvatarFallback>
          </Avatar>
          <span className="group-hover:scale-110 group-hover:font-semibold transition duration-300 origin-left">{project.projectName}</span>
        </div>
      </CardHeader>
      <CardContent className=" space-y-2">
        <CardDescription className=" flex items-center gap-x-2">
          <CalendarDays className=" w-4 h-4" />
          {formatDate(project.createdAt, "YYYY-MM-DD-hh:mm:ss")}
        </CardDescription>
        <CardDescription className=" flex items-center gap-x-2">
          <PencilLine className=" w-4 h-4" />
          <span className=" truncate" title={project.description || ""}>
            {project.description || "No description"}
          </span>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Link
          className={cn(buttonVariants({ size: 'sm', variant: 'link' }))}
          href={`/doc/${project.projectId}`}>
          查看
        </Link>
        <EditProjectButton proejctId={project.projectId} />
        <Button size="sm" variant="link">删除</Button>
      </CardFooter>
    </Card>
  )
}
