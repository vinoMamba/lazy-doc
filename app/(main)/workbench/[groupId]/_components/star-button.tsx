"use client"

import { starProjectAction } from "@/actions/start-project"
import { useAction } from "@/hooks/use-action"
import { Star, StarOff } from "lucide-react"
import { toast } from "sonner"

type Props = {
  projectId: string
  isStarred: boolean
}

const StarItem = () => {
  return (
    <>
      <StarOff className="w-[1.2rem] h-[1.2rem] " />
      <span>Star</span>
    </>
  )
}

const UnStarItem = () => {
  return (
    <>
      <Star className="w-[1.2rem] h-[1.2rem] text-yellow-300" />
      <span>Unstar</span>
    </>
  )
}

export const StarButton = ({ projectId, isStarred }: Props) => {
  const { execute } = useAction(starProjectAction, {
    onSuccess: () => {
      toast.success(`${isStarred ? "Unstarred" : "Starred"} successfully!`)
    },
    onError: (error) => {
      toast.error(error)
    },
  })
  return (
    <div
      className="flex items-center gap-x-2 cursor-pointer"
      onClick={() => execute({
        projectId,
        isStarred: !isStarred
      })}
    >
      {
        isStarred ? <UnStarItem /> : <StarItem />
      }
    </div>
  )
}
