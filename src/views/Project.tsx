import { Button } from "antd"
import { useParams, useNavigate } from "react-router-dom"

export const Project = () => {
  const navigate = useNavigate()
  const params = useParams()
  const str = JSON.stringify(params)
  return (
    <div>
      <Button onClick={() => navigate("/project/list")}>back</Button>
      {str}
    </div>
  )
}
