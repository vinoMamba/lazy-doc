interface Props {
  title: string
}

export const SubTitle = ({ title }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h6 className=" font-semibold">{title}</h6>
    </div>
  )
}
