import { ScrollArea } from "@/components/ui/scroll-area";
import { GroupAside } from "./_components/group-aside";
import { WorkbenchNav } from "./_components/workbench-nav";
import { Input } from "@/components/ui/input";
import { AddProjectButton } from "@/components/workbench/add-project-button";

export default function WorkbenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <WorkbenchNav />
      <main className="pt-20 pb-20">
        <div className="max-w-screen-lg mx-auto flex gap-x-2">
          <GroupAside />
          <div className="flex-1">
            <header className=" flex items-center gap-x-4 px-8 mb-8">
              <Input placeholder="Search projects..." />
              <AddProjectButton/>
            </header>
            <ScrollArea className=" w-full h-[calc(100vh-56px-80px-80px-40px)]">
              {children}
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  )
}
