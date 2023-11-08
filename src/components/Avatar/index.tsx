import type { FC } from 'react'

export const Avatar: FC = () => {
  return (
    <div className="avatar placeholder cursor-default">
      <div className="w-12 bg-neutral-focus text-neutral-content rounded-full">
        <span>Vino</span>
      </div>
    </div>
  )
}
