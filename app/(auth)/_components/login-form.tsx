"use client"
import { useForm } from "react-hook-form"
import { CardWrapper } from "./card-wrapper"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoginSchema } from "@/actions/login/schema"
import { loginAction } from "@/actions/login"
import { toast } from "sonner"
import { useAction } from "@/hooks/use-action"

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const { isPending, execute } = useAction<z.infer<typeof LoginSchema>>(loginAction, {
    onError: (error) => {
      toast.error(error)
    },
    onSuccess: () => {
      toast.success("Welcome back!")
    }
  })

  return (
    <CardWrapper
      headerLabel="Sign In"
      backButtonHref="/register"
      backButtonLabel="Don't have an account?"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => execute(values))}
          className=" space-y-6"
        >
          <div className=" space-y-4">
            <FormField
              control={form.control}
              name="email"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="example@gmail.com" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Sign In
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
