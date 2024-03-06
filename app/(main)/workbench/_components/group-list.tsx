"use client"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  list: Array<any>
}
export const GroupList = ({ list }: Props) => {
  const pathName = usePathname()
  return (
    <div className="flex flex-col gap-y-1">
      {list.map((item) => (
        <Link
          key={item.id}
          href={`/workbench/${item.id}`}
          className={cn(
            buttonVariants({
              variant: pathName === `/workbench/${item.id}` ? "default" : "ghost"
            }),
          )}
        >
          <div className=" flex items-center justify-start gap-x-1 w-full">
            {item.icon}
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
