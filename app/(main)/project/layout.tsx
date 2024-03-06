import { ProjectNavbar } from "./_components/project-navbar";

export default function ProjectLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className=" flex flex-col w-full h-full">
      <ProjectNavbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}
