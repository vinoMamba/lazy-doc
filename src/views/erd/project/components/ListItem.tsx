import { Card, Image, List } from "antd"
import { ProjectItem } from "/@/types"
import { FC } from "react"
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons"
import s from "/@/assets/error.png"
import { ProjectModal } from "./ProjectModal"
import { useProjectModal } from "../hooks/useProjectModal"

const { Item } = List
const { Meta } = Card

type Props = {
  project: ProjectItem,
  loading: boolean
}

const Cover: FC<{ logo: string, title: string }> = ({ logo, title }) => {
  if (logo) {
    return (
      <Image height={180} src={logo} fallback={s} />
    )
  } else {
    return (
      <div>
        <span
          className="flex justify-center items-center h[180px] bg-#bfbfbf rounded-t-8 text-24 text-white">
          {title.slice(0, 1)}
        </span>
      </div>
    )
  }
}

export const ListItem: FC<Props> = ({ project, loading }) => {
  const [modalRef, { openModal }] = useProjectModal()
  const handleOpen = () => {
    openModal({
      isEdit: true,
      project
    })
  }
  return (
    <Item>
      <Card
        loading={loading}
        hoverable
        style={{ width: 300 }}
        cover={<Cover logo={project.projectLogo} title={project.projectName} />}
        actions={[
          <EditOutlined onClick={handleOpen} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta title={project.projectName} description={project.description} />
      </Card>
      <ProjectModal ref={modalRef} />
    </Item>
  )
}
