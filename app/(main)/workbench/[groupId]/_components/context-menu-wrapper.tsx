import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { StarButton } from "./star-button"
import { Project } from "@prisma/client"
import { DeleteButton } from "./delete-button"

type Props = {
  children: React.ReactNode
  project: Project
}

export const ContextMenuWrapper = ({ children, project }: Props) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem >
          <StarButton
            projectId={project.id}
            isStarred={project.isStarred}
          />
        </ContextMenuItem>
        <ContextMenuItem >
          <DeleteButton
            projectId={project.id}
          />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
