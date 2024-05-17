"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/basic-table"
import { z } from "zod"
import { MemberSchema } from "@/schema/member"

type Member = z.infer<typeof MemberSchema>

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
  },
  {
    accessorKey: 'action',
    header: 'action',
  }
]

type Props = {
  data: Member[]
}

export const MembersTable = ({ data }: Props) => {
  return (
    <DataTable columns={columns} data={data} />
  )
}
