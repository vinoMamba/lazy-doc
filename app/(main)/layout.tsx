import { MainNav } from "./_components/main-nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MainNav />
      {children}
    </div>
  );
}
