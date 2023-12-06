import { Listbox, ListboxItem } from '@nextui-org/react'
import { type FC, useState } from 'react'
import { ContextMenu } from './components/ContextMenu'
import { SvgIcon } from '@/components/Icon'
import { router } from '@/router/router'
import { useProjectList } from '@/api/useProjectList'

export const ProjectList: FC = () => {
  const [currentIndex, setCurrentIndex] = useState('-1')

  const { list } = useProjectList()

  const handleItemCLick = (id: string) => {
    router.navigate(`/project/item/${id}`)
  }
  return (
    <Listbox aria-label="api list" items={list} className="mt-2 border-small px-1 py-2 rounded-small border-default-200">
      {list.map(item => (
        <ListboxItem
          onClick={() => handleItemCLick(item.id)}
          title={item.projectName}
          description={item.projectDesc}
          key={item.id}
          startContent={<SvgIcon icon="file-icons:microsoft-project" className=" text-4xl" />}
          endContent={currentIndex === item.id && (
            <ContextMenu />
          )}
          showDivider
          onMouseEnter={() => setCurrentIndex(item.id)}
        >
        </ListboxItem>
      ))}
    </Listbox>
  )
}
