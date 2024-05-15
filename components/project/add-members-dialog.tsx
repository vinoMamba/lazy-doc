"use client"
import { useMembersDialog } from "@/hooks/use-members-dialog"
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import useSWR, { Fetcher } from "swr"
import { z } from "zod";
import { User } from "@/schema/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";
import { UserItem } from "../auth/user-item";
import { ScrollArea } from "../ui/scroll-area";
import { useEffect, useState } from "react";

type Item = z.infer<typeof User>
type MemberItem = Item & {
  checked: boolean
}


export const AddMembersDialog = () => {
  const [isOpen, onClose, checkedList] = useMembersDialog(s => [s.isOpen, s.onClose, s.checkedList])
  const [list, setList] = useState<MemberItem[]>([])

  const fetcher: Fetcher<Item[], string> = (url) => fetch(url).then(res => res.json())
  const { data } = useSWR(`api/user/list`, fetcher)

  useEffect(() => {
    if (data) {
      const newList = data.map(i => ({
        ...i,
        checked: checkedList.includes(i.userId)
      }))
      setList(newList)
    }
  }, [data, checkedList])

  const handleChecked = (checked: boolean | string, item: MemberItem) => {
    setList(list)
  }

  const handleSave = () => {
    //TODO: save record
    onClose()
  }
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="top-[30%]">
        <DialogHeader>
          <DialogTitle>Add members</DialogTitle>
        </DialogHeader>
        <div className=" space-y-4">
          <Input placeholder="Search member" />
          <ScrollArea className="h-48 flex flex-col gap-4 border rounded-md">
            {
              list.map(i => {
                return (
                  <div key={i.userId} className="flex items-center gap-2 hover:bg-muted p-2">
                    <Checkbox
                      id={i.userId}
                      checked={i.checked}
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
          <Button onClick={handleSave}>Add members</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
