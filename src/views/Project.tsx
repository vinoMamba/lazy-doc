import { Button, Card, Tag } from "antd"
import { useNavigate } from "react-router-dom"

export const Project = () => {
  const navigate = useNavigate()
  return (
    <div>
      <br />
      <Card className="w-full bg-#fafafa" title="登录接口" extra={
        <Button onClick={() => navigate("/project/list")}>back</Button>
      }>
        <section>
          <Tag>POST</Tag>
          <Tag>/login/password</Tag>
        </section>

      </Card>
    </div>
  )
}
