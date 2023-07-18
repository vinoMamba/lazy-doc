import { ProjectAside, ProjectList } from "../components/Project"
import { Header } from "/@/components/Header"
export const Home = () => {
  return (
    <>
      <Header />
      <main className="relative flex w[1200px] my-0 mx-auto">
        <aside className="sticky top-80 h-[calc(100vh-80px)] w-300 px-8 border-r border-r-solid border-#ddd">
          <ProjectAside />
        </aside>
        <article className="w-full h-screen mt-16">
          <ProjectList />
        </article>
      </main>
    </>
  )
}
