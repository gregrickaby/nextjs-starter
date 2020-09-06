import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  text: string
  url: string
  css?: string
}

const Button: React.FC<ButtonProps> = ({
  text = '',
  url = '',
  css = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
}: ButtonProps) => {
  return (
    <Link href={url}>
      <a className={css}>{text}</a>
    </Link>
  )
}

export default Button
