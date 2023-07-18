import { ProjectItem } from "./type"

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
      {projectList.map(project => {
        return (
          <div>{project.projectName}</div>
        )
      })}
    </div>
  )
}

