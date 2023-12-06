import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure } from '@nextui-org/react'
import { type FC, useState } from 'react'
import { SvgIcon } from '@/components/Icon'
import type { CreateProjectParams } from '@/api/useCreateProject'
import { useCreateProject } from '@/api/useCreateProject'

export const AddIcon: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [createProjectParams, setCreateProjectParams] = useState<CreateProjectParams>({
    projectDesc: '',
    projectName: '',
    isPublic: '0',
  })

  const { handleCreateProject } = useCreateProject()

  return (
    <>
      <Button isIconOnly onClick={onOpen} size="sm" variant="flat">
        <SvgIcon
          icon="material-symbols:add"
          className="text-xl"
        />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent>
          <ModalHeader>Create Project</ModalHeader>
          <ModalBody>
            <Input
              label="Project Name"
              type="text"
              placeholder="Enter Project Name"
              value={createProjectParams.projectName}
              onChange={(e) => {
                setCreateProjectParams({
                  ...createProjectParams,
                  projectName: e.target.value,
                })
              }}
            />
            <Input
              label="Project Description"
              type="textarea"
              placeholder="Enter Project Description"
              value={createProjectParams.projectDesc}
              onChange={(e) => {
                setCreateProjectParams({
                  ...createProjectParams,
                  projectDesc: e.target.value,
                })
              }}
            />
            <Select
              label="Project Type"
              selectedKeys={[createProjectParams.isPublic]}
              onChange={(e) => {
                setCreateProjectParams({
                  ...createProjectParams,
                  isPublic: e.target.value as CreateProjectParams['isPublic'],
                })
              }}
            >
              <SelectItem key={0} value="0">公开项目</SelectItem>
              <SelectItem key={1} value="1">私密项目</SelectItem>
            </Select>
          </ModalBody>
          <ModalFooter className=" flex-col justify-start">
            <Button onClick={() => handleCreateProject(createProjectParams)}>Ok</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
