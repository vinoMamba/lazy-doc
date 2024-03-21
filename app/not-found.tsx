import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { PenTool } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <PenTool className=' w-10 h-10' />
      <p className=" mt-4 text-lg font-semibold">Page not found</p>
      <span className="mb-4 mt-2 text-sm text-muted-foreground">
        The page you are looking for does not exist.
      </span>
      <Link href="/" className={cn(buttonVariants())}>
        Go back home
      </Link>
    </div>
  )
}
