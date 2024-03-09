"use client"

import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSettingsDialog } from "@/hooks/use-settings-dialog"

export const SettingsButton = () => {
  const onOpen = useSettingsDialog(s => s.onOpen)
  return (
    <Button size="icon" variant="outline" onClick={onOpen}>
      <Settings className=" w-[1.2rem] h-[1.2rem]" />
    </Button>
  )
}
