import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "../theme/theme-toggle"
import { Logo } from "./logo"

export const HomeNav = ()=>{
  return (
    <nav className="fixed top-0 w-full flex items-center h-14 px-4 shadow-sm border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between">
        <Logo/>
        <div className="flex items-center justify-between gap-x-2 w-auto">
          <ModeToggle/>
          <Button asChild>
            <Link href="/register">
              Start Lazydoc for free
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
