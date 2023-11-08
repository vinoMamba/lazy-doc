import type { FC } from 'react'
import { SvgIcon } from '../Icon'
import { useDarkMode } from '@/store/useDarkMode'

export const ToggleMode: FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(s => [s.isDarkMode, s.setIsDarkMode])
  const handleChange = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <button className=" btn btn-square btn-sm " onClick={handleChange}>
      <SvgIcon icon={isDarkMode ? 'fluent:weather-moon-20-filled' : 'fluent:weather-sunny-20-filled'} />
    </button>
  )
}
