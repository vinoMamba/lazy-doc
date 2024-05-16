"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "../basic-table"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { AddMembersButton } from "./add-members-button"
import useSWR, { Fetcher } from "swr"
import { useEffect, useState } from "react"

type Member = {
  userId: string
  username: string
  email: string
  avatar: string
  permission: string
}
const columns: ColumnDef<Member>[] = [
  {
    accessorKey: 'username',
    header: 'Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'permission',
    header: 'Permission',
    cell: ({ row }) => {
      return (
        <Select
          value={row.original.permission}
          onValueChange={(value) => {
            console.log(value)
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Permission" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="reader">Reader</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectContent>
        </Select>
      )
    }
  },
  {
    accessorKey: 'action',
    header: 'action',
    cell: () => {
      return (
        <Button size="sm" variant="link" className=" text-destructive">Delete</Button>
      )
    }
  }
]

type Props = {
  projectId: string
}

export const Members = ({ projectId }: Props) => {
  const [data, setData] = useState<Member[]>([])
  useEffect(() => {
    if (projectId) {
      fetch(`api/member/list?projectId=${projectId}`, { next: { tags: ['fuck'] } })
        .then(res => res.json())
        .then(data => { setData(data) })
    }
  }, [projectId])
  return (
    <div className=" space-y-2">
      <div className=" text-right">
        <AddMembersButton checkedList={data?.map(i => i.userId) || []} propjectId={projectId} />
      </div>
      <DataTable columns={columns} data={data || []} />
    </div>
  )
}
