import { Modal, ModalProps } from "antd"
import { forwardRef, useImperativeHandle, useState } from "react"
import { ModalRef } from "./type"

export const BasicModal = forwardRef<ModalRef, ModalProps>((props, ref) => {
  const { children, open, ...otherProps } = props
  const [isOpen, setIsOpen] = useState(open)

  const handleOk = () => {
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
    closeModal
  }))

  return (
    <>
      <Modal
        {...otherProps}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  )
})
