import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

type ButtonProps = {
  text: string
  url: string
  classes?: string
}

const styles =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'

const Button: React.FC<ButtonProps> = ({
  text = '',
  url = '',
  classes = ''
}: ButtonProps) => {
  return (
    <Link href={url}>
      <a className={cn(styles, classes)}>{text}</a>
    </Link>
  )
}

export default Button
