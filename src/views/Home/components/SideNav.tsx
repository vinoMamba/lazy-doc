import type { Selection } from '@nextui-org/react'
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/react'
import { useState } from 'react'
import type { FC } from 'react'
import { SvgIcon } from '@/components/Icon'

export const SideNav: FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']))
  const list = [
    { id: '1', name: 'Top Project', icon: 'material-symbols:align-vertical-top-rounded' },
    { id: '2', name: 'All Project', icon: 'material-symbols:ballot' },
    { id: '3', name: 'Star Project', icon: 'ph:star' },
  ]

  const list2 = [
    { id: '4', name: 'Top Project', icon: 'material-symbols:align-vertical-top-rounded' },
    { id: '5', name: 'All Project', icon: 'material-symbols:ballot' },
    { id: '6', name: 'Star Project', icon: 'ph:star' },
  ]

  return (
    <div className="w-full border-small px-1 py-2 rounded-small border-default-200">
      <Listbox
        aria-label="category listbox"
        selectionMode="single"
        selectedKeys={selectedKeys}
        disallowEmptySelection
        onSelectionChange={setSelectedKeys}
      >
        <ListboxSection showDivider>
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
        </ListboxSection>
        <ListboxSection title="Groups">
          {
            list2.map(item => (
              <ListboxItem
                key={item.id}
                startContent={<SvgIcon icon="ic:round-tag" className=" text-lg" />}
              >
                {item.name}
              </ListboxItem>
            ))
          }
        </ListboxSection>
      </Listbox>
    </div>
  )
}
