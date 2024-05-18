"use client"
import { useMembersDialog } from "@/hooks/use-members-dialog"
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import useSWR, { Fetcher } from "swr"
import { z } from "zod";
import { User } from "@/schema/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { UserItem } from "@/components/auth/user-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useAction } from "@/hooks/use-action";
import { updateMembersAction } from "@/action/update-members";
import { UpdateMembersSchema } from "@/schema/member";
import { toast } from "sonner";

type Item = z.infer<typeof User>
type MemberItem = Item & {
  checked: boolean
  disabled: boolean
}

export const AddMembersDialog = () => {
  const [isOpen, onClose, checkedList, projectId] = useMembersDialog(s => [s.isOpen, s.onClose, s.checkedList, s.projectId])
  const [list, setList] = useState<MemberItem[]>([])
  const [internalCheckedList, setInternalCheckedList] = useState<Array<string>>([])
  const [username, setUsername] = useState('')

  const fetcher: Fetcher<Item[], { url: string, username: string }> = ({ url, username }) => fetch(`${url}?username=${username}`, ).then(res => res.json())
  const { data } = useSWR({ url: `/api/user/list`, username }, fetcher)

  useEffect(() => {
    if (data) {
      const newList = data.map(i => {
        return {
          ...i,
          checked: internalCheckedList.includes(i.userId) || checkedList.includes(i.userId),
          disabled: checkedList.includes(i.userId)
        }
      })
      setList(newList)
    }
  }, [data, checkedList, internalCheckedList])

  const handleChecked = (checked: boolean | string, item: Item) => {
    if (checked) {
      const newList = [...internalCheckedList, item.userId]
      setInternalCheckedList(newList)
    } else {
      const newList = internalCheckedList.filter(i => i !== item.userId)
      setInternalCheckedList(newList)
    }
  }


  const { execute, isPending } = useAction<z.infer<typeof UpdateMembersSchema>, null>(updateMembersAction, {
    onSuccess: () => {
      toast.success("Update success!")
    },
    onError: (error) => {
      toast.error(error)
    },
    onCompleted: () => {
      onClose()
      setInternalCheckedList([])
    }
  })

  const handleSave = () => {
    execute({
      projectId,
      userList: internalCheckedList
    })
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="top-[40%]">
        <DialogHeader>
          <DialogTitle>Add members</DialogTitle>
        </DialogHeader>
        <div className=" space-y-4">
          <Input placeholder="Search member" value={username} onChange={(e) => setUsername(e.target.value)} />
          <ScrollArea className="h-72 flex flex-col gap-4 border rounded-md">
            {
              list.map(i => {
                return (
                  <div key={i.userId} className="flex items-center gap-2 hover:bg-muted p-2">
                    <Checkbox
                      id={i.userId}
                      checked={i.checked}
                      disabled={i.disabled}
                      onCheckedChange={(checked) => handleChecked(checked, i)}
                    />
                    <label htmlFor={i.userId} className="w-full">
                      <UserItem user={i} />
                    </label>
                  </div>
                )
              })
            }
          </ScrollArea>
        </div>
        <DialogFooter>
          <Button disabled={isPending} onClick={handleSave}>Add members</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
