import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getFirstLetter } from "@/lib/shared"

type User = {
  avatar?: string 
  username: string
}

interface Props {
  user: User | undefined
}

export const UserItem = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-x-2 cursor-default">
      <Avatar>
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
