import { ListFilter } from "lucide-react"
import { Input } from "@/components/ui/input"

export const FileTreeButton = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center hover:bg-muted px-2 border rounded-md">
        <ListFilter className=" text-gray-400/[0.5]" />
        <Input className="outline-none border-none shadow-none focus-visible:ring-0" />
      </div>
    </div>
  )
}
