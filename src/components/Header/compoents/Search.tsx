import { Button, Divider, Kbd, Listbox, ListboxItem, ListboxSection, Modal, ModalContent, useDisclosure } from '@nextui-org/react'
import type { FC } from 'react'
import { SvgIcon } from '@/components/Icon'

export const Search: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} size="sm" variant="flat">
        <SvgIcon icon="iconamoon:search-thin" className=" text-lg" />
        <span className=" text-default-500">Quick Search...</span>
        <Kbd keys={['command']}>K</Kbd>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        hideCloseButton
      >
        <ModalContent className=" bg-default-200">
          <div className="flex items-center justify-between px-4">
            <SvgIcon icon="iconamoon:search-thin" className=" text-lg mr-2" />
            <input
              placeholder="Quick Search..."
              className="flex-1 outline-none py-4 bg-default-200 text-lg text-default-700"
              autoFocus
            />
            <Kbd>Esc</Kbd>
          </div>
          <Divider />
          <div className="w-full  px-1 py-2">
            <Listbox color="primary" aria-label="search list">
              <ListboxSection showDivider title="Recent">
                <ListboxItem key="r">Recent</ListboxItem>
              </ListboxSection>
              <ListboxSection title="Result">
                {[1, 2, 3].map(item => (
                  <ListboxItem key={item}>
                    item
                  </ListboxItem>
                ))}
              </ListboxSection>
            </Listbox>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
