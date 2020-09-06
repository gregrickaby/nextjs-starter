import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

export interface LinkButton {
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

export interface ButtonProps {
  /**
   * Required. Checks if the button should be disabled.
   */
  isDisabled: boolean
  /**
   * Required. The display content of the button.
   */
  content: string
  /**
   * Optional. Additional CSS classes.
   */
  classes?: string
}

export const Button: React.FC<ButtonProps> = ({
  isDisabled = false,
  content = 'Learn More',
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
