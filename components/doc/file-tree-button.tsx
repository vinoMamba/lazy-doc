import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ListFilter, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

export const FileTreeButton = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center hover:bg-muted px-2 border rounded-md">
        <ListFilter className=" text-gray-400/[0.5]" />
        <Input className="outline-none border-none shadow-none focus-visible:ring-0" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className=" text-gray-400/[0.5]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Add folder
            </DropdownMenuItem>
            <DropdownMenuItem>
              Add file
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
