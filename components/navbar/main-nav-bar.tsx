import { Logo } from "@/components/logo"
import { SettingsButton } from "@/components/settings/settings-button"
import { ModeToggle } from "@/components/toggle-mode"
import { UserButton } from "@/components/user-button"

export const MainNav = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center h-14 px-4 shadow-sm border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-between gap-x-2 w-full md:w-auto">
          <ModeToggle />
          <SettingsButton />
          <UserButton />
        </div>
      </div>
    </nav>
  )
}
