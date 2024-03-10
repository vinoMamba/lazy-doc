"use client"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Group } from "@prisma/client"
import { Folder, FolderMinus, Star } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  list: Array<Partial<Group>>
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
              variant: pathName === `/workbench/${item.id}` ? "secondary" : "link"
            }),
          )}
        >
          <div className=" flex items-center justify-start gap-x-1 w-full">
            {item.id === '-1'
              ? <Folder className=" w-[1.2rem] h-[1.2rem]" />
              : item.id === '0'
                ? <Star className="w-[1.2rem] h-[1.2rem]" />
                : <FolderMinus className=" w-[1.2rem] h-[1.2rem]" />
            }
            <span>{item.groupName}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
