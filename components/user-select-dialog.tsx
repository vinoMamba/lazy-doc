"use client"

import useSWR from "swr"
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog"
import { useUserSelectDialog } from "@/hooks/use-user-select-dialog"
import { User } from "@prisma/client"
import { Skeleton } from "./ui/skeleton"
import { Checkbox } from "./ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getFirstLetter } from "@/lib/shared"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const FormSchema = z.object({
  userIds: z.array(z.string()),
})

export const UserSelectDialog = () => {
  const [isOpen, onClose] = useUserSelectDialog(s => [s.isOpen, s.onClose])
  const { data, isLoading } = useSWR<User[]>("/api/user", () => fetch("/api/user").then(res => res.json()))

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userIds: [],
    },
  })

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values)
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[400px]">
        <DialogHeader>User select</DialogHeader>
        {
          isLoading
            ? <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            : (
              <Form {...form}>
                <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="userIds"
                    render={() => (
                      <FormItem>
                        {data?.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="userIds"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-center space-x-3 space-y-0 "
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, item.id])
                                          : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    <div className="flex items-center gap-x-2 cursor-default">
                                      <Avatar>
                                        <AvatarImage src={item.image || ""} />
                                        <AvatarFallback>
                                          {getFirstLetter(item.name)}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div className=" flex flex-col">
                                        <span className=" font-semibold">{item.name}</span>
                                        <span className=" text-sm text-muted-foreground">{item.email}</span>
                                      </div>
                                    </div>
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" type="submit">Add</Button>
                </form>
              </Form>
            )
        }
      </DialogContent>
    </Dialog >
  )
}
