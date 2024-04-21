import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

const font = Poppins({
  weight: ["600"],
  subsets: ["latin"]
})

interface Props {
  label: string
}
export const Header = ({ label }: Props) => {
  return (
    <h6 className={cn(
      font.className,
      " text-2xl drop-shadow-md w-full text-center"
    )}>
      {label}
    </h6>
  )
}
