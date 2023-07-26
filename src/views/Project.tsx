import { Card } from "antd"
import { useNavigate } from "react-router-dom"
import { EditButton } from "../components/Page"
import { Icon } from "../components/Icon"
import { RollbackOutlined } from "@ant-design/icons"
import { usePage } from "../store/usePage"
import { useEffect } from "react"
import { Preview } from "../components/Editor"


export const Project = () => {
  const [pageContent] = usePage(state => [state.pageContent])
  const navigate = useNavigate()

  useEffect(() => {
    console.log('fuck')
  }, [pageContent])
  return (
    <div>
      <Card
        className="w-full bg-#fafafa" title="登录接口"
        extra={
          <div className="flex items-center gap-8">
            <Icon helpMsg="返回" onClick={() => navigate("/project/list")} ><RollbackOutlined /></Icon>
            <EditButton />
          </div>
        }>
        <Preview value={pageContent} />
      </Card>
    </div>
  )
}

























