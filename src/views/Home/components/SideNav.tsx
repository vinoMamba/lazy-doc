import type { Selection } from '@nextui-org/react'
import { Divider, Listbox, ListboxItem } from '@nextui-org/react'
import { useState } from 'react'
import type { FC } from 'react'
import { SvgIcon } from '@/components/Icon'

const SectionTitle: FC = () => (
  <>
    <div className="flex items-center justify-between my-4">
      <span className="ml-1">Groups</span>
      <SvgIcon icon="material-symbols:create-new-folder" className=" text-xl" />
    </div>
    <Divider />
  </>
)

export const SideNav: FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']))
  const list = [
    { id: 'top', name: 'Top Projects', icon: 'material-symbols:align-vertical-top-rounded' },
    { id: 'all', name: 'All Projects', icon: 'material-symbols:ballot' },
    { id: 'star', name: 'Star Projects', icon: 'ph:star' },
  ]

  const list2 = Array.from({ length: 100 }, (_, i) => ({ id: `${i}`, name: `Group ${i + 1}` }))

  return (
    <>
      <Listbox
        aria-label="category listbox"
        selectionMode="single"
        selectedKeys={selectedKeys}
        disallowEmptySelection
        onSelectionChange={setSelectedKeys}
      >
        {
          list.map(item => (
            <ListboxItem
              key={item.id}
              startContent={<SvgIcon icon={item.icon} className=" text-lg" />}
            >
              {item.name}
            </ListboxItem>
          ))
        }
      </Listbox>
      <Divider className="my-2" />
      <Listbox
        topContent={(<SectionTitle />)}
        aria-label="group listbox"
        selectionMode="single"
        selectedKeys={selectedKeys}
        disallowEmptySelection
        onSelectionChange={setSelectedKeys}
        classNames={{
          list: 'max-h-[500px] overflow-y-scroll',
        }}
      >
        {
          list2.map(item => (
            <ListboxItem
              key={item.id}
              startContent={<SvgIcon icon="ic:twotone-tag" className=" text-lg" />}
            >
              {item.name}
            </ListboxItem>
          ))
        }
      </Listbox>
    </>
  )
}
