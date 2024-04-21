import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  backHref: string;
}
export const AuthPageWrapper = ({ children, backHref }: Props) => {
  return (
    <div className="container h-screen flex items-center justify-center">
      <Button asChild variant="ghost" className=" absolute top-4 left-4">
        <Link href={backHref}>
          <ArrowLeft />
          <span className=" ml-2">Back</span>
        </Link>
      </Button>
      {children}
    </div>
  )
}
