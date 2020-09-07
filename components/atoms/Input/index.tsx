import React from 'react'
import cn from 'classnames'

export interface InputProps {
  /**
   * Required. The input type.
   */
  type: string
  /**
   * Optional. Optional ID attribute.
   */
  id?: string
  /**
   * Optional. Optional. Placeholder text.
   */
  placeholder?: string
  /**
   * Optional. Additional CSS classes.
   */
  classes?: string
}

const defaultStyles =
  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'

export const Input: React.FC<InputProps> = ({
  type = 'text',
  id,
  placeholder,
  classes
}: InputProps) => {
  return (
    <input
      id={id}
      className={cn(defaultStyles, classes)}
      type={type}
      placeholder={placeholder}
    />
  )
}
