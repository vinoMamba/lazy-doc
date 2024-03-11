import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Settings } from "lucide-react";
import Link from "next/link";
import { EmptyProject } from "./_components/empty-project";
import { getProjectsByGroupId } from "@/data/project";

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
    <div className="w-full grid grid-cols-3 gap-8 p-8 pt-0">
      {projects.map(project => (
        <Link
          href={`/project/${project.id}`}
          key={project.id}>
          <Card className=" hover:bg-primary-foreground">
            <CardHeader>
              <h2 className="text-lg font-bold">{project.projectName}</h2>
            </CardHeader>
            <CardContent>
              <p>Project description</p>
            </CardContent>
            <CardFooter className=" flex items-center justify-end">
              <Button size="icon" variant="ghost">
                <Settings className=" w-[1.2rem] h-[1.2rem]" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
