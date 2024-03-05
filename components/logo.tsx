import Link from "next/link"
import { PenTool } from "lucide-react"
export const Logo = () => {
  return (
    <Link href="/" className="items-center gap-x-2 hover:opacity-75 flex">
      <PenTool />
      <span className=" uppercase">Lazy Doc</span>
    </Link>
  )
}
