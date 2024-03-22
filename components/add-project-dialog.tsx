"use client"

import { Dialog, DialogContent, DialogHeader } from "./ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAction } from "@/hooks/use-action"
import { toast } from "sonner"
import { AddProjectSchema } from "@/actions/add-project/schema"
import { addProjectAction } from "@/actions/add-project"
import { Project } from "@prisma/client"
import { useProjectDialog } from "@/hooks/use-project-dialog"
import { Textarea } from "./ui/textarea"

export const AddProjectDialog = () => {
  const [isOpen, onClose, projectId] = useProjectDialog(s => [s.isOpen, s.onClose, s.projectId])

  const form = useForm<z.infer<typeof AddProjectSchema>>({
    resolver: zodResolver(AddProjectSchema),
    defaultValues: {
      projectName: "",
      description: "",
    }
  })

  const { isPending, execute } = useAction<
    z.infer<typeof AddProjectSchema>, Project>(addProjectAction, {
      onError(error) {
        toast.error(error)
      },
      onSuccess() {
        toast.success("Added project successfully.")
        onClose()
        form.reset()
      }
    })

  const onSubmit = form.handleSubmit((values) => {
    execute(values)
  })

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[480px]">
        <DialogHeader>
          {projectId ? "Edit" : "Add"} project
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={onSubmit}
            className=" space-y-6"
          >
            <FormField
              control={form.control}
              name="projectName"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter a new project name" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description </FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter a description" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Add Project
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
