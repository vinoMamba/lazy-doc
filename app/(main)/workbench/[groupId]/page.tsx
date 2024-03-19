import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { EmptyProject } from "./_components/empty-project";
import { getProjectsByGroupId } from "@/data/project";
import { ContextMenuWrapper } from "./_components/context-menu-wrapper";

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
            <Card className="group hover:bg-primary-foreground h-full">
              <CardHeader>
                <h2 className="text-lg font-bold">{project.projectName}</h2>
              </CardHeader>
              <CardContent>
                <span>{project.isStarred ? 'star' : 'unstar'}</span>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          </Link>
        </ContextMenuWrapper>
      ))}
    </div>
  )
}
