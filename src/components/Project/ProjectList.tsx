import { FileFilled } from "@ant-design/icons"
import { ProjectItem } from "./type"
import { List } from "antd"
import { ActionDropdown } from "./components/ActionDropdown"

//TODO: 从接口获取项目列表
const projectList: Array<ProjectItem> = Array.from({ length: 20 }).map((_, index) => {
  return {
    id: index.toString(),
    isStar: false,
    isTop: false,
    projectName: `项目-${index}`
  }
})

export const ProjectList = () => {
  return (
    <div>
      <List
        dataSource={projectList}
        renderItem={item => (
          <List.Item
            actions={[<ActionDropdown />]}
            className="mb-16 cursor-pointer">
            <div className="ml-16 py-8 flex items-center text-18">
              <FileFilled className="mr-8 py-8" />
              {item.projectName}
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

