import React from 'react'
import Link from 'next/link'

type InputProps = {
  text: string
  url: string
  css?: string
}

const Button: React.FC<InputProps> = ({
  text = '',
  url = '',
  css = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
}: InputProps) => {
  return (
    <Link href={url}>
      <a className={css}>{text}</a>
    </Link>
  )
}

export default Button
