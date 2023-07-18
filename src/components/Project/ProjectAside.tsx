import { FolderFilled, PushpinFilled, StarFilled } from "@ant-design/icons"
import { useState } from "react"

export const ProjectAside = () => {
  const [currentIndex, setCurrentIndex] = useState(2)
  const list = [
    { id: 0, name: '置顶', icon: <PushpinFilled /> },
    { id: 1, name: '星标项目', icon: <StarFilled color="#ffc107" /> },
    { id: 2, name: '所有项目', icon: <FolderFilled color="gray" /> },
  ]
  return (
    <nav className="cursor-pointer border-b border-b-solid border-#ddd pb-8">
      {list.map((item, index) => {
        return (
          <div
            key={item.id}
            className="p-8 mb-4 rounded-8"
            onClick={() => {
              setCurrentIndex(index)
            }}
            style={{
              background: currentIndex === index ? '#fafafa' : 'transparent'
            }}
          >
            {item.icon}
            <span className="ml-4">{item.name}</span>
          </div>
        )
      })}
    </nav>
  )
}
