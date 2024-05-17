import { PenTool } from 'lucide-react'
import { AddProjectButton } from './add-project-button'

export default function EmptyProject() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <PenTool className='w-10 h-10' />
      <p className=" mt-4 text-lg font-semibold">Empty list</p>
      <p className="mb-4 mt-2 text-sm text-muted-foreground">
        Click button below to add one.
      </p>
      <AddProjectButton />
    </div>
  )
}
