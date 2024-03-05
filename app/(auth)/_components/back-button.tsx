import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Props {
  label: string
  href: string
}

export const BackButton = ({ label, href }: Props) => {
  return (
    <Button variant="link" className=" w-full">
      <Link href={href} className=" font-semibold">
        {label}
      </Link>
    </Button>
  )
}
