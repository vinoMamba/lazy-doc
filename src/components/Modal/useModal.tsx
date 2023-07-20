import { useState } from "react"

type Method = {
  openClick: () => void
  closeClick: () => void
}
type Return = [boolean, Method]

export const useModal = () => {
  const [open, setIsOpen] = useState(false)

  const openClick = () => { setIsOpen(true) }
  const closeClick = () => { setIsOpen(false) }

  return [open, { openClick, closeClick }] as Return
}
