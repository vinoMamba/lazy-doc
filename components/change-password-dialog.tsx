"use cliente"

import { Keyboard } from "lucide-react"
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { usepasswordDialog } from "@/hooks/use-password-dialog"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { useForm } from "react-hook-form"
import { ChangePasswordSchema } from "@/actions/settings/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAction } from "@/hooks/use-action"
import { changePasswordAction } from "@/actions/settings"
import { toast } from "sonner"
import { User } from "next-auth"
import { logout } from "@/actions/logout"

export const ChangePasswordDialog = () => {
  const [isOpen, onClose] = usepasswordDialog(s => [s.isOpen, s.onClose])
  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      oldPssword: "",
      newPassword: "",
      confirmPassword: ""
    }
  })
  const { isPending, execute } = useAction<z.infer<typeof ChangePasswordSchema>, User>(changePasswordAction, {
    onError(error) {
      toast.error(error)
    },
    onSuccess() {
      toast.success("Password updated")
      logout()
    }
  })
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[480px]">
        <DialogHeader>
          <div className=" flex flex-col items-center justify-center gap-2 text-center">
            <Keyboard />
            <p className=" font-semibold">Change password</p>
            <span className=" text-muted-foreground text-sm">Use a password at least 15 letters long, or at least 8 characters long with both letters and numbers.</span>
          </div>
        </DialogHeader>
        <Alert variant="destructive">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            You will be logged out after changing your password.
          </AlertDescription>
        </Alert>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => execute(values))}
            className=" space-y-6"
          >
            <FormField
              control={form.control}
              name="oldPssword"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please enter your old password.</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter you old password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter a new password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter a new password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm your new password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Confirm your new password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Change password
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
