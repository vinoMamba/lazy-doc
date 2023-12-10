import type { FC } from 'react'

interface KbdProps {
  children?: string
  keys: Array<'Ctrl' | 'Alt' | 'Command'>
}

const keyMap = {
  Ctrl: '⌃',
  Alt: '⌥',
  Command: '⌘',
}

export const Kbd: FC<KbdProps> = ({ children, keys }) => {
  return (
    <kbd
      className="px-1.5 py-0.5 inline-flex space-x-0.5 items-center font-sans font-normal text-center text-sm bg-neutral-200 dark:bg-neutral-800 rounded-md"
    >
      {keys.map(key => (
        <abbr key={key} className="no-underline">
          {keyMap[key]}
        </abbr>
      ))}
      <span>{children}</span>
    </kbd>
  )
}
