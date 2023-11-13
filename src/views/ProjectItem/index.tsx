import type { FC } from 'react'
import { Textarea } from '@nextui-org/react'
import { SvgIcon } from '@/components/Icon'
import { DividerLine } from '@/components/DividerLine'
import { RequestInput } from '@/components/RequestInput'

export const ProjectItem: FC = () => {
  return (
    <article className="w-full h-screen border-small my-2 p-4 rounded-small border-default-200">
      {/* title */}
      <h6 className=" flex items-center">
        <SvgIcon icon="ic:twotone-tag" className=" text-lg" />
        <span className=" text-xl italic font-bold">Login Interface</span>
      </h6>
      {/* description */}
      <DividerLine title="Description" />
      <section>
        <Textarea
          size="sm"
          isReadOnly
          value="This is a login interface design."
        />
      </section>

      <DividerLine title="Request" />
      <section>
        <RequestInput />
      </section>
    </article>
  )
}
