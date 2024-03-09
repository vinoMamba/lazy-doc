import { Separator } from "@/components/ui/separator"

interface Props {
  title: string
  showSeparator?: boolean
}

export const SubTitle = ({ title, showSeparator = true }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h6 className=" font-semibold">{title}</h6>
      {showSeparator && (<Separator />)}
    </div>
  )
}
