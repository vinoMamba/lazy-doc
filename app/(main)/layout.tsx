import { MainAside } from "@/components/aside/main-aside";
import { MainNav } from "@/components/navbar/main-nav-bar";
import { DialogProvider } from "@/components/provider/dialog-provider";
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
      <main className="pt-20 h-full">
        <div className="container mx-auto flex gap-x-2 h-full">
          <MainAside />
          <div className=" bg-red-200 flex-1">
            {children}
          </div>
        </div>
      </main>
      <DialogProvider />
    </SessionProvider>
  );
}
