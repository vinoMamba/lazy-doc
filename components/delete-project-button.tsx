"use client"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Terminal } from "lucide-react"
import { Project } from "@prisma/client"
import { useAction } from "@/hooks/use-action"
import { DeleteProjectSchema } from "@/actions/delete-project/schema"
import { DeleteProjectAction } from "@/actions/delete-project"
import { toast } from "sonner"
import { z } from "zod"
import { useState } from "react"

export const DeleteProjectButton = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false)

  const { isPending, execute } = useAction<
    z.infer<typeof DeleteProjectSchema>, Project>(DeleteProjectAction, {
      onError(error) {
        toast.error(error)
        setOpen(false)
      },
      onSuccess() {
        toast.success("Deleted project successfully.")
        setOpen(false)
      }
    })


  return (
    <Popover open={open} onOpenChange={() => setOpen((o) => !o)}>
      <PopoverTrigger>
        <div className={cn(buttonVariants({ size: 'sm', variant: 'link' }))} >Delete</div>
      </PopoverTrigger>
      <PopoverContent align="start">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>
            Delete <span className=" font-semibold">{project.projectName}</span> ?
          </AlertTitle>
          <AlertDescription>
            If you delete ,then you can find it in the trash.
          </AlertDescription>
        </Alert>
        <div className="flex items-center gap-x-2 w-full mt-4">
          <Button disabled={isPending} size="sm" variant="secondary" className=" w-full" onClick={() => setOpen(false)}>Cancel</Button>
          <Button disabled={isPending} size="sm" className=" w-full" onClick={() => execute({ projectId: project.id })}>Delete</Button>
        </div>
      </PopoverContent>
    </Popover>

  )
}
