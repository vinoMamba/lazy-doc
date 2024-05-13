import { AddProjectButton } from "@/components/project/add-project-button";
import { ProjectList } from "@/components/project/project-list";
import { SearchProject } from "@/components/project/search-project";
import { Suspense } from "react";

type Props = {
  searchParams: {
    pageNum: string
    projectName?: string
  }
}

export default function ProjectPage({ searchParams }: Props) {
  const projectName = searchParams?.projectName || '';
  const pageNum = Number(searchParams?.pageNum) || 1;

  return (
    <div className=" h-full">
      <header className=" max-w-screen-md mx-auto flex items-center gap-x-4 mb-4">
        <SearchProject />
        <AddProjectButton />
      </header>
      <Suspense key={pageNum + projectName} fallback={<ProjectList.Skeleton />}>
        <ProjectList pageNum={pageNum} projectName={projectName} />
      </Suspense>
    </div>
  )
}
