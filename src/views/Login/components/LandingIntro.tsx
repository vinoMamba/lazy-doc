import type { FC } from 'react'
import { Logo } from '@/components/Logo'

export const LandingIntro: FC = () => {
  return (
    <aside className="px-4 flex flex-col justify-between pb-2">
      <Logo large />
      <ul className="flex-1 flex flex-col gap-2 mt-4 p-4  rounded-md">
        <li className="text-[#b249f8]">➜ A Technical Document Tool</li>
        <li className="text-[#b249f8]">➜ Convenient And Fast</li>
        <li className=" text-success">➜ Let's Start! 😬</li>
      </ul>
    </aside>
  )
}
