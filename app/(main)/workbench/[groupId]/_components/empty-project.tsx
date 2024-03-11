import { AddProjectButton } from "@/components/workbench/add-project-button"
import { PenTool } from "lucide-react"

export const EmptyProject = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <PenTool />
      <p className=" mt-4 text-lg font-semibold">No projects added</p>
      <span className="mb-4 mt-2 text-sm text-muted-foreground">You have not added any projects yet. Add one below.</span>
      <AddProjectButton />
    </div>
  )
}
