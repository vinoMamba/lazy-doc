import { MainNav } from "@/components/main-nav-bar";
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
        {children}
      </main>
    </SessionProvider>
  );
}
