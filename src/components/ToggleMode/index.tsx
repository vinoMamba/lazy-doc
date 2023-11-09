import type { FC } from 'react'
import { Button } from '@nextui-org/react'
import { SvgIcon } from '@/components/Icon'
import { useDarkMode } from '@/store/useDarkMode'

export const ToggleMode: FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(s => [s.isDarkMode, s.setIsDarkMode])
  const handleChange = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <Button isIconOnly onClick={handleChange} size="sm" variant="flat">
      <SvgIcon
        icon={isDarkMode ? 'fluent:weather-moon-20-filled' : 'fluent:weather-sunny-20-filled'}
        className="text-xl"
      />
    </Button>
  )
}
