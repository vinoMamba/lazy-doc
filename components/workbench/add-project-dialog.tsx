"use client"

import { Dialog, DialogContent, DialogHeader } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAction } from "@/hooks/use-action"
import { toast } from "sonner"
import { AddOrEditProjectSchema } from "@/actions/add-project/schema"
import { addOrEditProjectAction } from "@/actions/add-project"
import { Project } from "@prisma/client"
import { useProjectDialog } from "@/hooks/use-project-dialog"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import useSwr from "swr"
import { useEffect } from "react"

export const AddProjectDialog = () => {
  const [isOpen, onClose, projectId] = useProjectDialog(s => [s.isOpen, s.onClose, s.projectId])

  const { data } = useSwr(() => `/api/project/${projectId}`, (url) => fetch(url).then(res => res.json()))

  useEffect(() => {
    if (data) {
      form.setValue("id", data.id)
      form.setValue("projectName", data.projectName)
      form.setValue("description", data.description)
      form.setValue("isPublic", data.isPublic ? "1" : "0")
    }
  }, [data])

  const form = useForm<z.infer<typeof AddOrEditProjectSchema>>({
    resolver: zodResolver(AddOrEditProjectSchema),
    defaultValues: {
      projectName: "",
      description: "",
      isPublic: "0"
    }
  })

  const { isPending, execute } = useAction<
    z.infer<typeof AddOrEditProjectSchema>,
    { project: Project, isEdit: boolean }>(addOrEditProjectAction, {
      onError(error) {
        toast.error(error)
      },
      onSuccess({ isEdit }) {
        toast.success(`${isEdit ? "Updated" : "Added"} project successfully.`)
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
            <FormField
              control={form.control}
              name="isPublic"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Public</FormLabel>
                  <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Public project" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">Public</SelectItem>
                      <SelectItem value="1">Private</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isPending}>
              {projectId ? "Edit" : "Add"} Project
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
