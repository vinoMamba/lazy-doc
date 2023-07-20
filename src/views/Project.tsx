import { Button, Card, Table, Tag, Typography } from "antd"
import { useNavigate } from "react-router-dom"
import { pageData } from "./mock"
import { ByteEditor } from "../components/Editor/ByteEditor"

const { Text, Title, Paragraph } = Typography

export const Project = () => {
  const { url, reqMethod, desc, reqHeaders, reqData } = pageData
  const mdReqData = `\`\`\` ${reqData} \`\`\``
  const navigate = useNavigate()
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '值',
      dataIndex: 'value',
      key: 'value',
    },
  ]
  return (
    <div>
      <br />
      <Card className="w-full bg-#fafafa" title="登录接口" extra={
        <Button onClick={() => navigate("/project/list")}>back</Button>
      }>
        <Typography>
          <Title level={5}>功能描述</Title>
          <Paragraph>
            <Text>{desc}</Text>
          </Paragraph>
        </Typography>

        <Typography>
          <Title level={5}>请求URL</Title>
          <Paragraph>
            <Tag>{reqMethod}</Tag>
            <Tag>
              <Text
                copyable={{ text: url }}
              >{url}</Text>
            </Tag>
          </Paragraph>
        </Typography>

        <Typography>
          <Title level={5}>请求头</Title>
          <Paragraph>
            <Table pagination={false} bordered dataSource={reqHeaders} columns={columns} />
          </Paragraph>
        </Typography>

        <Typography>
          <Title level={5}>请求参数data格式定义</Title>
          <Paragraph>
            <ByteEditor value={mdReqData} />
          </Paragraph>
        </Typography>
      </Card>
    </div>
  )
}
