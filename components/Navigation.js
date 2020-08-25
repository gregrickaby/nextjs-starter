import {useState} from 'react'
import Link from 'next/link'
import config from '@/lib/config'
import Hamburger from 'hamburger-react'

export default function Navigation() {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="flex items-center">
      <div className="flex items-center justify-between">
        {isOpen
          ? config.navigation.map((item, index) => (
              <Link href={item.href} key={index}>
                <a className="ml-12 transition-colors duration-200 ease-in-out hover:text-gray-600">
                  {item.label}
                </a>
              </Link>
            ))
          : null}
        <Hamburger label="Show menu" toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  )
}
