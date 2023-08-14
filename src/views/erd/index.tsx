import { Outlet, useNavigate } from "react-router-dom"
import { Header } from "/@/components/Header"
import { useEffect } from "react"
import { ProjectAside } from "/@/components/Project"

export const Erd = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("project")
  }, [navigate])

  return (
    <>
      <Header />
      <main className="relative flex w[1200px] my-0 mx-auto">
        <aside className="sticky top-80 h-[calc(100vh-80px)] w-300 px-8 border-r border-r-solid border-#ddd">
          <ProjectAside />
        </aside>
        <article className="w-full min-h[calc(100vh-80px)] mt-16 ml-16">
          <Outlet />
        </article>
      </main>
    </>
  )
}
