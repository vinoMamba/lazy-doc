"use client"

import { useEffect, useState } from "react"
import { SettingsDialog } from "@/components/settings/settings-dialog"
import { ChangePasswordDialog } from "@/components/settings/change-password-dialog"
import { ChangeEmailDialog } from "@/components/settings/change-email-dialog"

export const DialogProvider = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <SettingsDialog />
      <ChangePasswordDialog/>
      <ChangeEmailDialog/>
    </>
  )
}
