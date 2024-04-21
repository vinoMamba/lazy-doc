"use client"

import { RegisterSchema } from "@/schema/auth"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CardWrapper } from "./card-wrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAction } from "@/hooks/use-action"
import { registerAction } from "@/action/register"
import { toast } from "sonner"

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    }
  })

  const { execute, isPending } = useAction<z.infer<typeof RegisterSchema>, null>(registerAction, {
    onSuccess: () => {
      toast.success("Registration successful.")
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  return (
    <CardWrapper
      headerLabel="Sign Up"
      backButtonHref="/login"
      backButtonLabel="Already have an account? Sign In."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(values => execute(values))}>
          <div className=" space-y-4">
            <FormField
              control={form.control}
              disabled={isPending}
              name="email"
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
              name="username"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="exmaple" />
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
            <Button type="submit" className="w-full" disabled={isPending}>
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  )
}
