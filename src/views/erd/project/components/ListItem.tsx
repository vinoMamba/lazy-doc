import { Avatar, List, Skeleton } from "antd"
import { ProjectItem } from "/@/types"
import { FC } from "react"
import { ActionDropdown } from "./ActionDropdown"

const { Item } = List

type Props = {
  project: ProjectItem,
  loading: boolean
}


export const ListItem: FC<Props> = ({ project, loading }) => {
  return (
    <Item
      actions={[<ActionDropdown item={project} />]}
    >
      <Skeleton avatar title={false} loading={loading} active>
        <List.Item.Meta
          avatar={
            <Avatar size="large" src={project.projectLogo} >{project.projectName.slice(0, 1)}</Avatar>
          }
          title={project.projectName}
          description={project.description}
        />
      </Skeleton>
    </Item>
  )
}
