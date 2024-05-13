import { Button } from "@/components/ui/button";
import { config } from "@/config/site";
import { cn } from "@/lib/utils";
import { Computer } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-x-2 hover:opacity-60 italic mb-4 text-neutral-600">
        <Computer className=" h-4 w-4" />
        <Link href={config.github} target="_blank">
          Follow along on github
        </Link>
      </div>
      <h1 className={cn(
        "uppercase text-3xl md:text-6xl text-center font-semibold text-neutral-600 mb-6",
        textFont.className
      )}>{config.title}</h1>
      <p className="  text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        {config.description}
      </p>
      <div className=" flex items-center gap-x-2 mt-6">
        <Button size="lg" asChild>
          <Link href="/login">
            Login
          </Link>
        </Button>
        <Button size="lg" variant="secondary" asChild>
          <Link href="">
            Github
          </Link>
        </Button>
      </div>
    </div>
  )
}
