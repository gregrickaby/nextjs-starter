import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

interface LinkButton {
  /**
   * Required. The button text.
   */
  text: string
  /**
   * Required. The button link.
   */
  url: string
  /**
   * Optional. Additional CSS classes.
   */
  classes?: string
}

const defaultStyles =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'

export const LinkButton: React.FC<LinkButton> = ({
  text,
  url,
  classes
}: LinkButton) => {
  return (
    <Link href={url}>
      <a className={cn(defaultStyles, classes)}>{text}</a>
    </Link>
  )
}

interface ButtonProps {
  /**
   * Checks if the button should be disabled.
   */
  isDisabled: boolean
  /**
  The display content of the button.
  */
  content: string
  /**
   * Optional. Additional CSS classes.
   */
  classes?: string
}

const Button: React.FC<ButtonProps> = ({
  isDisabled = false,
  content,
  classes
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cn(defaultStyles, classes)}
    >
      {content}
    </button>
  )
}

export default Button
