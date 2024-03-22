import { AddProjectButton } from "@/components/add-project-button";
import { DialogProvider } from "@/components/dialog-provider";
import { MainAside } from "@/components/main-aside";
import { MainNav } from "@/components/main-nav-bar";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <MainNav />
      <main className="pt-20 pb-20 h-full px-4 md:px-0">
        <div className="container mx-auto flex gap-x-2 h-full">
          <MainAside />
          <div className="flex-1">
            <header className=" flex items-center gap-x-4 mb-4">
              <Input placeholder="Search projects..." />
              <AddProjectButton />
            </header>
            {children}
          </div>
        </div>
      </main>
      <DialogProvider />
    </SessionProvider>
  );
}
