import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react'
import { type FC, useEffect, useState } from 'react'
import { SvgIcon } from '@/components/Icon'
import type { CreateProjectParams } from '@/api/useCreateProject'
import { useCreateProject } from '@/api/useCreateProject'

export const AddIcon: FC = () => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const [createProjectParams, setCreateProjectParams] = useState<CreateProjectParams>({
    projectDesc: '',
    projectName: '',
    isPublic: '0',
  })

  useEffect(() => {
    setBtnDisabled(!createProjectParams.projectName)
  }, [createProjectParams.projectName])

  const { handleCreateProject } = useCreateProject()

  const handleOk = async () => {
    await handleCreateProject(createProjectParams)
    setCreateProjectParams({
      projectDesc: '',
      projectName: '',
      isPublic: '0',
    })
    onClose()
  }

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
          <ModalHeader>创建项目</ModalHeader>
          <ModalBody>
            <Input
              label="项目名称"
              isRequired
              type="text"
              placeholder="请输入项目名称"
              value={createProjectParams.projectName}
              onChange={(e) => {
                setCreateProjectParams({
                  ...createProjectParams,
                  projectName: e.target.value,
                })
              }}
            />
            <Input
              label="项目描述"
              type="textarea"
              placeholder="请输入项目描述"
              value={createProjectParams.projectDesc}
              onChange={(e) => {
                setCreateProjectParams({
                  ...createProjectParams,
                  projectDesc: e.target.value,
                })
              }}
            />
            <Select
              label="项目类型"
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
            <Button isDisabled={btnDisabled} onClick={handleOk}>创建</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
