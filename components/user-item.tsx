import { getFirstLetter } from "@/lib/shared"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { User } from "next-auth"

interface Props {
  user: User | undefined
}

export const UserItem = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-x-2 cursor-default">
      <Avatar>
        <AvatarImage src={user?.image || ""} />
        <AvatarFallback>
          {getFirstLetter(user?.name)}
        </AvatarFallback>
      </Avatar>
      <div className=" flex flex-col">
        <span className=" font-semibold">{user?.name}</span>
        <span className=" text-sm text-muted-foreground">{user?.email}</span>
      </div>
    </div>
  )
}
