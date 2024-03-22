"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddGroupSchema } from "@/actions/add-group/schema"
import { z } from "zod"
import { addGroupAction } from "@/actions/add-group"
import { useAction } from "@/hooks/use-action"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Group } from "@prisma/client"
import { FilePlus2 } from "lucide-react"

export const GroupForm = () => {
  const [isAdd, setIsAdd] = useState(false)

  const form = useForm<z.infer<typeof AddGroupSchema>>({
    resolver: zodResolver(AddGroupSchema),
    defaultValues: {
      groupName: ""
    }
  })

  const { isPending, execute } = useAction<z.infer<typeof AddGroupSchema>, Group>(addGroupAction, {
    onError(error) {
      toast.error(error)
    },
    onSuccess() {
      toast.success("Group added")
      onClose()
    }
  })

  const onClose = () => {
    form.reset()
    setIsAdd(false)
  }

  if (isAdd) {
    return (
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => execute(values))}
            className="space-y-3"
          >
            <FormField
              control={form.control}
              name="groupName"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Enter a new group name" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="sm" disabled={isPending}>
              Add
            </Button>
            <Button className="w-full" size="sm" variant="secondary" disabled={isPending} onClick={onClose}>
              Cancel
            </Button>
          </form>
        </Form>
      </div>
    )
  }

  return (
    <div className=" border bg-card text-card-foreground shadow-sm p-2 flex items-center justify-between cursor-default">
      <p className="text-sm font-semibold">Groups</p>
      <FilePlus2 className="text-muted-foreground w-[1.2rem] h-[1.2rem] cursor-pointer" onClick={() => setIsAdd(true)} />
    </div>
  )
}
