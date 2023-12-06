import type { FC } from 'react'
import { Button } from 'antd'
import { SvgIcon } from '@/components/Icon'
import { useDarkMode } from '@/store/useDarkMode'

export const ToggleMode: FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(s => [s.isDarkMode, s.setIsDarkMode])
  const handleChange = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <Button
      onClick={handleChange}
      icon={(
        <SvgIcon
          icon={isDarkMode ? 'fluent:weather-moon-20-filled' : 'fluent:weather-sunny-20-filled'}
          className="text-xl"
        />
      )}
    />
  )
}
