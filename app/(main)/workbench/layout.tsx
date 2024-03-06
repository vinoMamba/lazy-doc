import { ScrollArea } from "@/components/ui/scroll-area";
import { GroupAside } from "./_components/group-aside";
import { WorkbenchNav } from "./_components/workbench-nav";

export default function WorkbenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <WorkbenchNav />
      <main className="pt-20 pb-20">
        <div className="container flex gap-x-2">
          <GroupAside />
          <ScrollArea className=" w-full h-[calc(100vh-56px-80px-80px)]">
            {children}
          </ScrollArea>
        </div>
      </main>
    </div>
  )
}
