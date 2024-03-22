"use client"

import { Dialog, DialogContent, DialogHeader } from "./ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { useForm } from "react-hook-form"
import { ChangeEmailSchema, } from "@/actions/settings/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAction } from "@/hooks/use-action"
import { changeEmailAction } from "@/actions/settings"
import { toast } from "sonner"
import { User } from "next-auth"
import { logout } from "@/actions/logout"
import { useEmailDialog } from "@/hooks/use-email-dialog"

export const ChangeEmailDialog = () => {
  const [isOpen, onClose, email] = useEmailDialog(s => [s.isOpen, s.onClose, s.email])
  const form = useForm<z.infer<typeof ChangeEmailSchema>>({
    resolver: zodResolver(ChangeEmailSchema),
    defaultValues: {
      email: ""
    }
  })
  const { isPending, execute } = useAction<z.infer<typeof ChangeEmailSchema>, User>(changeEmailAction, {
    onError(error) {
      toast.error(error)
    },
    onSuccess() {
      toast.success("Email updated")
      logout()
    }
  })
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[480px]">
        <DialogHeader>
          <div className=" flex items-center gap-x-1">
            <span>Your current email is </span>
            <b> {email}</b>
            <span>.</span>
          </div>
        </DialogHeader>
        <Alert variant="destructive">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            You will be logged out after changing your email.
          </AlertDescription>
        </Alert>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => execute(values))}
            className=" space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please enter your password.</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter you new email" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Change email
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
