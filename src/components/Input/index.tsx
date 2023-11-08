import { type ChangeEvent, type FC, useEffect, useState } from 'react'

interface InputProps {
  bordered?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  placeholder?: string
  type?: 'text' | 'password'
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onBlur?: () => void
}

export const Input: FC<InputProps> = ({ bordered, size, ...props }) => {
  const [classList, setClassList] = useState(['input', 'max-w-xs'])

  useEffect(() => {
    setClassList(prev => ([
      ...prev,
      size ? `input-${size}` : '',
      bordered ? 'input-bordered' : '',
    ]))
  }, [bordered, size])

  return (
    <div>
      <input
        type="text"
        className={classList.join(' ')}
        {...props}
      />
    </div>
  )
}
