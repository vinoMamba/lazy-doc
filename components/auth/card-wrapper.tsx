import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { BackButton } from "./back-button"
import { Header } from "./card-header"


interface Props {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
}

export const CardWrapper = ({ children, headerLabel, backButtonHref, backButtonLabel }: Props) => {
  return (
    <Card className=" w-[400px] bg-zinc-100 dark:bg-zinc-900">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}
