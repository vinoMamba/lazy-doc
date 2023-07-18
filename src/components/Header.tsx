import { MessageOutlined, UserOutlined } from "@ant-design/icons"
import { Icon } from "./Icon"

export const Header = () => {
  return (
    <header
      className="position-sticky top-0 box-b backdrop-blur-24 z-1000 border-b border-b-solid border-gray"
    >
      <div className="w[1248px] my-0 m-auto px-24">
        <nav className="h[64px] relative flex items-center justify-between">
          <div>
            <h1 className='m-0'>
              <p className="text-20 line-height-7 font-bold">Lazy Doc</p>
              <p className="text-16 mt-8 font-oblique text-#999">Let&#39;s Enjoy Writing</p>
            </h1>
          </div>
          <div className="flex items-center gap-16 cursor-pointer">
            <Icon helpMsg="我的消息"><MessageOutlined /></Icon>
            <Icon helpMsg="用户信息"><UserOutlined /></Icon>
          </div>
        </nav>
      </div >
    </header >
  )
}
