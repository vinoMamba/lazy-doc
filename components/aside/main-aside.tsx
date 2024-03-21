import { Separator } from "@/components/ui/separator"

export const MainAside = () => {
  return (
    <aside className="w-1/5 flex-col gap-y-1 shrink-0 bg-blue-200 hidden md:flex">
      <Separator />
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-muted-foreground">Groups</p>
      </div>
    </aside>
  )
}
