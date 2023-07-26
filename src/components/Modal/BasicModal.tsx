import { Modal } from "antd"
import { forwardRef, useImperativeHandle, useState } from "react"
import { ModalProps, ModalRef } from "./type"

export const BasicModal = forwardRef<ModalRef, ModalProps>((props, ref) => {
  const { children, open, ...otherProps } = props

  const [initProps, setProps] = useState<ModalProps>(otherProps)

  const [isOpen, setIsOpen] = useState(open)

  const handleOk = () => {
    const { beforeOkFunc } = otherProps
    if (typeof beforeOkFunc === 'function') {
      beforeOkFunc()
    }
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }


  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
    setProps
  }))

  return (
    <>
      <Modal
        {...initProps}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  )
})
