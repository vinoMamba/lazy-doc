import { UserButton } from "@/components/auth/user-button";
import { DialogProvider } from "@/components/dialog-provider";
import { Logo } from "@/components/home/logo";
import { ModeToggle } from "@/components/theme/theme-toggle";

export default function WorkbenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <nav className="fixed top-0 w-full flex items-center h-14 shadow-sm border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
          <div className="container  w-full flex items-center justify-between">
            <div className=" flex items-center gap-x-4">
              <Logo />
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <ModeToggle />
              <UserButton/>
            </div>
          </div>
        </nav>
      </header>
      <div className="pt-20 pb-20 h-full  container">
        {children}
        <DialogProvider />
      </div>
    </>
  );
}
