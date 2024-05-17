"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/basic-table"
import { z } from "zod"
import { MemberSchema } from "@/schema/member"
import { PermissionSelect } from "./permission-select"
import { DeleteMemberButton } from "./delete-member-button"

type Member = z.infer<typeof MemberSchema>


type Props = {
  data: Member[]
  ownerId: string
}

export const MembersTable = ({ data, ownerId }: Props) => {

  const columns: ColumnDef<Member>[] = [
    {
      accessorKey: 'username',
      header: 'Name',

    },
    {
      accessorKey: 'email',
      header: 'Email'
    },
    {
      accessorKey: 'permission',
      header: 'Permission',
      cell: ({ row }) => {
        return <PermissionSelect
          disabled={row.original.userId === ownerId}
          permission={row.original.permission}
          userId={row.original.userId}
          projectId={row.original.projectId} />
      }
    },
    {
      accessorKey: 'action',
      header: 'action',
      cell: ({ row }) => {
        return <DeleteMemberButton
          disabled={row.original.userId === ownerId}
          userId={row.original.userId}
          projectId={row.original.projectId} />
      }
    }
  ]
  return (
    <DataTable columns={columns} data={data} />
  )
}
