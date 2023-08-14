import { Notice } from "./Notice"
import { User } from "./User"

export const Header = () => {
  return (
    <header
      className="position-sticky top-0 box-b backdrop-blur-24 z-1000 border-b border-b-solid border-#ddd"
    >
      <div className="my-0 m-auto px-24">
        <nav className="h[64px] relative flex items-center justify-between">
          <div>
            <h1 className='m-0'>
              <p className="text-20 line-height-7 font-bold">Lazy Doc</p>
              <p className="text-16 mt-8 font-oblique text-#999">Let&#39;s Enjoy Writing</p>
            </h1>
          </div>
          <div className="flex items-center gap-16 cursor-pointer">
            <Notice />
            <User/>
          </div>
        </nav>
      </div >
    </header >
  )
}
