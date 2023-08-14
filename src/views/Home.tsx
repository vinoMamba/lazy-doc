import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { Card } from "antd"

const { Meta } = Card

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="w-screen h[calc(100vh-65px)] bg-#f0f2f5 flex items-center justify-center gap-16">
        <Card hoverable style={{ width: 240 }} onClick={() => navigate("/erd")}>
          <Meta title="Erd" description="数据库管理工具" />
        </Card>
        <Card hoverable style={{ width: 240 }} onClick={() => navigate("/doc")}>
          <Meta title="Show Doc" description="接口文档管理工具" />
        </Card>
      </div >
    </>
  )
}
