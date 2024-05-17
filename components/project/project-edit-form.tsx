import { getToken } from "@/lib/token"
import { ProjectForm } from "./project-form"
import { Oops } from "@/components/oops"
import { redirect } from "next/navigation"

type Props = {
  projectId: string
}

export const ProjectEditForm = async ({ projectId }: Props) => {
  const token = await getToken()
  if (!token) {
    redirect("/")
  }
  const res = await fetch(`${process.env.NEXT_API_URL}/project/info?projectId=${projectId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const result = await res.json()

  if (result && result.code === 0) {
    return (
      <ProjectForm values={result.data} />
    )
  } else {
    return <Oops />
  }
}
