import { auth } from "@/lib/auth"

export default async function WorkbenchPage() {
  const session = await auth()
  return (
    <div>
      <h1>Workbench</h1>
      {JSON.stringify(session)}
    </div>
  )
}
