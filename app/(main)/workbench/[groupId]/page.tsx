import Link from "next/link";
import { EmptyProject } from "./_components/empty-project";
import { getProjectsByGroupId } from "@/data/project";
import { ContextMenuWrapper } from "./_components/context-menu-wrapper";
import { ProjectCard } from "./_components/project-card";

interface Props {
  params: {
    groupId: string;
  };
};

export default async function Page({ params }: Props) {
  const projects = await getProjectsByGroupId(params.groupId);

  if (projects.length === 0) {
    return <EmptyProject />
  }

  return (
    <div className="w-full grid grid-cols-3 gap-4 p-8 pt-0">
      {projects.map(project => (
        <ContextMenuWrapper
          key={project.id}
          project={project}
        >
          <Link href={`/project/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        </ContextMenuWrapper>
      ))}
    </div>
  )
}
