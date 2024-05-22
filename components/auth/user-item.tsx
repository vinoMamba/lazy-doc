import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getFirstLetter } from "@/lib/shared"
import { UserSchema } from "@/schema/user"
import { z } from "zod"

interface Props {
  user: z.infer<typeof UserSchema> | undefined
  className?: string
}

export const UserItem = ({ user ,className}: Props) => {
  return (
    <div className="flex items-center gap-x-2 cursor-default">
      <Avatar className={className}>
        <AvatarImage src={user?.avatar || ""} />
        <AvatarFallback>
          {getFirstLetter(user?.username)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className=" font-semibold">{user?.username}</span>
      </div>
    </div>
  )
}
