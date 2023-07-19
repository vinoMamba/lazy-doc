import { Button } from "antd"
import { useParams, useNavigate } from "react-router-dom"
import { ByteEditor } from "../components/Editor/ByteEditor"

export const Project = () => {
  const navigate = useNavigate()
  const params = useParams()
  const str = JSON.stringify(params)
  return (
    <div>
      <Button onClick={() => navigate("/project/list")}>back</Button>
      <ByteEditor value={'xxxx'} />
      {str}
    </div>
  )
}
