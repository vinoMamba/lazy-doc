import { useLoaderData } from "react-router-dom"

export const ProjectItem = () => {
  const ddd = useLoaderData()
  return (
    <div>{JSON.stringify(ddd)}</div>
  )
}
