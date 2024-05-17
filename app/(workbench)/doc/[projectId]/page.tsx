export default function DocPage({ params }: { params: { projectId: string } }) {
  return (
    <div>{params.projectId}</div>
  )
}
