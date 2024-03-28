"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "./ui/button"
import { DataTable } from "./data-table"
import { useUserSelectDialog } from "@/hooks/use-user-select-dialog"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

export type Perm = {
  id: string
  name: string
  perm: 'A' | 'R' | 'W'
}

export const columns: ColumnDef<Perm>[] = [
  {
    accessorKey: "id",
    header: 'ID'
  },
  {
    accessorKey: "name",
    header: 'Name'
  },
  {
    accessorKey: "perm",
    header: 'Perm',
    cell: ({ row }) => {
      return (
        <Select value={row.original.perm}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="A">Admin</SelectItem>
              <SelectItem value="R">Read</SelectItem>
              <SelectItem value="W">Write</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return (
        <Button size="sm" variant="link" className=" text-destructive">Remove</Button>
      )
    }
  }
]

type Props = {
  projectId: string

}

export const PermList = ({ projectId }: Props) => {
  const [userOpen] = useUserSelectDialog(s => [s.onOpen])
  const data: Perm[] = [
    { id: '1', name: 'User', perm: 'A' },
    { id: '2', name: 'Admin', perm: 'R' },
  ]
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <div className="flex items-center justify-between gap-x-4">
        <Input placeholder="Search member" />
        <Button size="sm" onClick={() => userOpen()}>Add member</Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
