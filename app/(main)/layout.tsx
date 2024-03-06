import { MainNav } from "./_components/main-nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MainNav />
      <main className="pt-20 pb-20">
        {children}
      </main>
    </div>
  );
}
