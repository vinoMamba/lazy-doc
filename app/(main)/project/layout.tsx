import { AddProjectButton } from "@/components/add-project-button";
import { DialogProvider } from "@/components/dialog-provider";
import { MainAside } from "@/components/main-aside";
import { Input } from "@/components/ui/input";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto flex gap-x-2 h-full">
      <MainAside />
      <div className="flex-1">
        <header className=" flex items-center gap-x-4 mb-4">
          <Input placeholder="Search projects..." />
          <AddProjectButton />
        </header>
        {children}
      </div>
      <DialogProvider />
    </div>
  );
}
