import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectEditLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Card className="w-full h-full max-w-screen-md mx-auto" >
      <CardHeader>
        <div className="flex items-center relative">
          <Button asChild variant="ghost" className="absolute left-0" >
            <Link href="/project" >
              <ArrowLeft />
              <span className=" ml-2">Back</span>
            </Link>
          </Button>
          <h6 className="flex-1 text-center w-full text-lg text-muted-foreground cursor-default">
            Edit project
          </h6>
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
