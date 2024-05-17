"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAction } from "@/hooks/use-action"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { AddOrEditProjectSchema } from "@/schema/project"
import { projectAction } from "@/action/add-or-edit-project"
import { useEffect } from "react"


type Props = {
  values?: z.infer<typeof AddOrEditProjectSchema>
  onFinish?: () => void
}

export const ProjectForm = ({ values, onFinish }: Props) => {

  const isUpdate = !!values?.projectId

  const form = useForm<z.infer<typeof AddOrEditProjectSchema>>({
    resolver: zodResolver(AddOrEditProjectSchema),
    defaultValues: {
      projectName: "",
      description: "",
    }
  })

  useEffect(() => {
    if (values) {
      form.setValue('projectId', values.projectId)
      form.setValue('projectName', values.projectName)
      form.setValue('description', values.description)
    }
  }, [values])

  const { isPending, execute } = useAction<
    z.infer<typeof AddOrEditProjectSchema>, null>(projectAction, {
      onError(error) {
        toast.error(error)
      },
      onSuccess() {
        toast.success(`${isUpdate ? 'Update' : 'Add'} project successfully.`)
        !isUpdate && form.reset()
        onFinish?.()
      }
    })

  const onSubmit = form.handleSubmit((values) => {
    execute(values)
  })

  return (
    <Form {...form} >
      <form
        onSubmit={onSubmit}
        className="space-y-6 px-4"
      >
        <FormField
          control={form.control}
          name="projectName"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter the project name." type="text" />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Enter the description." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isUpdate ? "Update" : "Add"} project
        </Button>
      </form>
    </Form>
  )
}

