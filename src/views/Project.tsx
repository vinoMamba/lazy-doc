import { Card, Table, Tag, Typography } from "antd"
import { useNavigate } from "react-router-dom"
import { pageData } from "./mock"
import { EditButton } from "../components/Page"
import { Icon } from "../components/Icon"
import { RollbackOutlined } from "@ant-design/icons"

const { Text, Title, Paragraph } = Typography

export const Project = () => {
  const { url, reqMethod, desc, reqHeaders } = pageData
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
        <div className="flex items-center gap-8">
          <Icon helpMsg="返回" onClick={() => navigate("/project/list")} ><RollbackOutlined /></Icon>
          <EditButton />
        </div>
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
          </Paragraph>
        </Typography>
      </Card>
    </div>
  )
}
