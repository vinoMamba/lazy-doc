"use client"
import { Input } from "@/components/ui/input"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

export const SearchProject = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('pageNum', '1');
    if (value) {
      params.set("projectName", value)
    } else {
      params.delete("projectName")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return <Input
    placeholder="Search project..."
    defaultValue={searchParams.get("projectName")?.toString()}
    onChange={e => handleSearch(e.target.value)}
  />
}
