import type { FC } from 'react'
import { SvgIcon } from './Icon'
import { useDarkMode } from '@/store/useDarkMode'

export const ToggleMode: FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(s => [s.isDarkMode, s.setIsDarkMode])
  const handleChange = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <label className="swap fixed top-8 right-8">
      <input type="checkbox" checked={isDarkMode} onChange={handleChange} />
      <SvgIcon icon="material-symbols:sunny" className="swap-off" />
      <SvgIcon icon="material-symbols:nightlight" className="swap-on" />
    </label>
  )
}
