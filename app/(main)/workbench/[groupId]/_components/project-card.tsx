"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { getDate } from "@/lib/date"
import { Project } from "@prisma/client"
import { CalendarDays, Shell } from "lucide-react"

type Props = {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="hover:bg-primary-foreground transition duration-300 group">
      <AspectRatio ratio={16 / 9}>
        <CardHeader>
          <p className="font-semibold group-hover:scale-150 group-hover:opacity-60 origin-left transition duration-300">{project.projectName}</p>
        </CardHeader>
        <CardContent className=" flex flex-col gap-y-2">
          <CardDescription className=" flex items-start gap-x-2">
            <CalendarDays className=" w-[1.2rem] h-[1.2rem]" />
            {getDate(project.createdAt)}
          </CardDescription>
          {project.description && (
            <CardDescription className=" flex items-center gap-x-2  ">
              <Shell className=" w-[1.2rem] h-[1.2rem] shrink-0" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="truncate">
                      {project.description}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className=" w-[200px] text-primary p-4" side="bottom">
                    {project.description}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardDescription>
          )}
        </CardContent>
      </AspectRatio>
    </Card>
  )
}
