
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "../basic-table"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { AddMembersButton } from "./add-members-button"

type Member = {
  id: string
  name: string
  email: string
  permission: string
}
const mockData: Member[] = Array.from({ length: 1 }, (_, index) => ({
  id: index + '_id',
  name: 'jack' + index,
  email: 'example@outlook.com',
  permission: 'admin'
}))

const columns: ColumnDef<Member>[] = [
  {
    accessorKey: 'name',
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


export const Members = () => {
  const checkedList = ['BHEHfnVJNW']
  return (
    <div className=" space-y-2">
      <div className=" text-right">
        <AddMembersButton checkedList={checkedList} />
      </div>
      <DataTable columns={columns} data={mockData} />
    </div>
  )
}
