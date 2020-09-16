import {useEffect, useRef} from 'react'
import Link from 'next/link'
import {shrinkHeader} from '@/lib/functions'
import Navigation from '../molecules/Navigation'

function Logo() {
  return (
    <Link href="/">
      <a>
        <img
          src="/logo.svg"
          alt="site logo"
          loading="lazy"
          height="128"
          width="128"
        />
      </a>
    </Link>
  )
}

export default function Header() {
  const headerRef = useRef(null)
  useEffect(() => {
    shrinkHeader(headerRef)
  }, [])
  return (
    <header
      ref={headerRef}
      className="sticky top-0 py-8 transition-all bg-white border-b border-gray-200"
    >
      <div className="container px-4 lg:px-0 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}
