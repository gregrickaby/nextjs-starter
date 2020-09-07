import React, {useState, ReactElement} from 'react'
import Link from 'next/link'
import SiteConfig from '../../site.config'
import Hamburger from 'hamburger-react'

const Links: React.FC = () => {
  return (
    <>
      {SiteConfig.navigation.map(
        (item, index): ReactElement => (
          <Link href={item.href} key={index}>
            <a className="ml-8 transition-colors duration-200 ease-in-out hover:text-gray-600">
              {item.label}
            </a>
          </Link>
        )
      )}
    </>
  )
}

const Drawer: React.FC = () => {
  return (
    <div className="absolute w-56 h-screen py-12 px-4 top-0 right-0 flex flex-col bg-white shadow-md">
      <Links />
    </div>
  )
}

const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between">
      <div className="hidden md:block">
        <Links />
      </div>
      {isOpen ? <Drawer /> : null}
      <span className="md:hidden">
        <Hamburger label="Show menu" toggled={isOpen} toggle={setOpen} />
      </span>
    </nav>
  )
}

export default Navigation
