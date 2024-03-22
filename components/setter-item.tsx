interface Props {
  title: string
  subTitle?: string | null
  children?: React.ReactNode
}

export const SetterItem = ({ title, subTitle, children }: Props) => {
  return (
    <div className=" flex items-center justify-between">
      <div>
        <p className=" font-semibold">{title}</p>
        <span className=" text-muted-foreground text-sm">{subTitle}</span>
      </div>
      {children}
    </div>
  )
}
