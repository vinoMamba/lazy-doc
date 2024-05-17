import { AddMembersButton } from "./add-members-button"
import { getToken } from "@/lib/token"
import { redirect } from "next/navigation"
import { Oops } from "@/components/oops"
import { MembersTable } from "./members-table"
import { z } from "zod"
import { MemberListSchema } from "@/schema/member"

type Props = {
  projectId: string
}

type MemberList = z.infer<typeof MemberListSchema>

export const Members = async ({ projectId }: Props) => {
  const token = await getToken()
  if (!token) {
    redirect("/")
  }

  const res = await fetch(`${process.env.NEXT_API_URL}/project/members?projectId=${projectId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    next: {
      tags: ['projectMembers']
    }
  })

  const result = await res.json()

  if (result && result.code === 0) {

    const data = (result.data || []) as MemberList
    const checkedList = data.items.map(i => i.userId)

    return (
      <div>
        <div className="flex items-center justify-between py-4">
          Members
          <AddMembersButton checkedList={checkedList} propjectId={projectId} />
        </div>
        <MembersTable data={data.items} ownerId={data.ownerId} />
      </div>
    )
  } else {
    return <Oops />
  }

}
