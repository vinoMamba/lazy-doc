import { ScrollArea } from "@/components/ui/scroll-area";
import { GroupAside } from "./_components/group-aside";

export default function WorkbenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex gap-x-2">
      <GroupAside />
      <ScrollArea className=" w-full h-[calc(100vh-56px-80px-80px)]">
        {children}
      </ScrollArea>
    </div>
  )
}
