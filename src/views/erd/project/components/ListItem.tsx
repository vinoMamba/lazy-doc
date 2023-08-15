import { Card, Dropdown, Image, List, MenuProps, Popconfirm } from "antd"
import { ProjectItem } from "/@/types"
import { FC } from "react"
import { DeleteFilled, EditOutlined, EllipsisOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import s from "/@/assets/error.png"
import { ProjectModal } from "./ProjectModal"
import { useProjectModal } from "../hooks/useProjectModal"
import { MouseEvent } from "react"

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
  const handleItemClick = (e: MouseEvent) => {
    const actions = document.querySelectorAll(".ant-card-actions")
    const isHave = Array.from(actions).some(item => item.contains(e.target as HTMLElement));
    if (!isHave) {
      console.log(project.projectId)
    }
  }
  return (
    <Item>
      <Card
        onClick={e => handleItemClick(e)}
        loading={loading}
        hoverable
        style={{ width: 300 }}
        cover={<Cover logo={project.projectLogo} title={project.projectName} />}
        actions={[
          <EditOutlined key="edit" onClick={handleOpen} />,
          <DeleteFilled key="delete" />
        ]}
      >
        <Meta title={project.projectName} description={project.description} />
      </Card>
      <ProjectModal ref={modalRef} />
    </Item>
  )
}
