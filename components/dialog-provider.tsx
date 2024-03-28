"use client"

import { useEffect, useState } from "react"
import { SettingsDialog } from "./settings-dialog"
import { ChangePasswordDialog } from "./change-password-dialog"
import { ChangeEmailDialog } from "./change-email-dialog"
import { EditProjectDialog } from "./edit-project-dialog"
import { UserSelectDialog } from "./user-select-dialog"

export const DialogProvider = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <SettingsDialog />
      <ChangePasswordDialog />
      <ChangeEmailDialog />
      <EditProjectDialog/>
      <UserSelectDialog/>
    </>
  )
}
