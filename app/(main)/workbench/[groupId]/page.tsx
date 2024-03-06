import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Settings } from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    groupId: string;
  };
};

const getProjects = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => ({
    id: i,
    name: `Project ${i}`
  }))
}

export default function Page({ params }: Props) {
  const projects = getProjects();
  return (
    <div className="w-full grid grid-cols-3 gap-8 p-8 pt-0">
      {projects.map(project => (
        <Link
          href={`/project/${project.id}`}
          key={project.id}>
          <Card className=" hover:bg-primary-foreground">
            <CardHeader>
              <h2 className="text-lg font-bold">{project.name}</h2>
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
