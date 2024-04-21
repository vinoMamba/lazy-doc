import { HomeNav } from "@/components/home/home-nav";

export default function HomeLayout({children}:{children:React.ReactNode}){
  return (
    <div className=" w-full h-full">
      <HomeNav/>
      <main className=" pt-20 pb-20">
        {children}
      </main>
    </div>
  )
}
