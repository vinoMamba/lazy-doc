import { FC, ReactNode } from "react"

type Props = {
  icon: ReactNode
  title: string
}

export const ModalTitle: FC<Props> = ({ icon, title }) => {
  return (
    <div className="flex items-center">
      <span className="mr-8">{icon}</span>
      <span className="font-400">{title}</span>
    </div>
  )
}
