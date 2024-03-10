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
import { AddGroupSchema } from "@/actions/add-group/schema"
import { addGroupAction } from "@/actions/add-group"
import { Group } from "@prisma/client"
import { useGroupDialog } from "@/hooks/use-group-dialog"

export const AddGroupDialog = () => {
  const [isOpen, onClose] = useGroupDialog(s => [s.isOpen, s.onClose,])
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
      form.reset()
    }
  })
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[480px]">
        <DialogHeader>
          Add group
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => execute(values))}
            className=" space-y-6"
          >
            <FormField
              control={form.control}
              name="groupName"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter a new group name" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Add group
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
