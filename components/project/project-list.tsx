import { getToken } from "@/lib/token"
import { ProjectCard } from "./project-card"
import { Skeleton } from "@/components/ui/skeleton"
import { PenTool } from "lucide-react"
import { ProjectListSchema } from "@/schema/project"
import { BasicPagination } from "@/components/basic-pagination"

type Props = {
  pageNum: number,
  projectName?: string
}

export const ProjectList = async ({ pageNum, projectName }: Props) => {

  const token = await getToken()
  const res = await fetch(`${process.env.NEXT_API_URL}/project/list?pageSize=12&pageNum=${pageNum}&projectName=${projectName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })

  if (!res.ok) {
    return <EmptyList />
  }

  const data = await res.json()

  const validateData = ProjectListSchema.safeParse(data.data)

  if (!validateData.success) {
    return <EmptyList />
  }

  const { items, totalPage ,total} = validateData.data

  return (
    <div className=" flex flex-col gap-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 pt-8">
        {
          items.map((item) => (
            <ProjectCard key={item.projectId} project={item} />
          ))
        }
      </div>
      <BasicPagination totalPage={totalPage} page={pageNum} total={total} />
    </div>
  )
}

ProjectList.displayName = 'ProjectList'

ProjectList.Skeleton = function ProjectListSkeleton() {
  return (
    <div className="grid gird-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-8">
      {
        Array.from({ length: 12 }).map((_, index) => (
          <Skeleton key={index} className="aspect-video h-full w-full p-2" />
        ))
      }
    </div>
  )
}


const EmptyList = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <PenTool className=" text-muted-foreground" />
      <p className=" mt-4 text-lg text-muted-foreground">No Data</p>
    </div>
  )
}
