import type { FC } from 'react'
import { Logo } from '@/components/Logo'
import { ToggleMode } from '@/components/ToggleMode'

export const LandingIntro: FC = () => {
  return (
    <aside className=" hero min-h-full">
      <div className=" hero-content">
        <div className=" max-w-md">
          <div className=" flex items-start justify-between ">
            <Logo large={true} />
            <div className="mt-2">
              <ToggleMode />
            </div>
          </div>
          <div className="mockup-code bg-base-100 mt-4">
            <pre data-prefix="➜" className="text-indigo-600"><code>A Technical Docment Tool</code></pre>
            <pre data-prefix="➜" className="text-indigo-600"><code>Convenient And Fast</code></pre>
            <pre data-prefix="➜" className="text-success"><code>Let's Start!</code></pre>
          </div>
        </div>
      </div>
    </aside>
  )
}
