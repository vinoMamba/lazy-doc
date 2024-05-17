"use clitent"
import { updateMemberAction } from "@/action/update-member"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAction } from "@/hooks/use-action"
import { UpdateMemberSchema } from "@/schema/member"
import { toast } from "sonner"
import { z } from "zod"

type Props = {
  permission: string
  userId: string
  projectId: string
  disabled: boolean
}

export const PermissionSelect = ({ permission, userId, projectId, disabled }: Props) => {

  const { execute } = useAction<z.infer<typeof UpdateMemberSchema>, null>(updateMemberAction, {
    onSuccess: () => {
      toast.success("Update success!")
    },
    onError: (error) => {
      toast.error(error)
    },
  })


  const handleChange = (value: string) => {
    const params = { userId, projectId, permission: value }
    execute(params)
  }

  return (
    <Select
      disabled={disabled}
      value={permission}
      onValueChange={handleChange}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a permission" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="reader">Reader</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
