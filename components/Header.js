import {useEffect, useRef} from 'react'
import {shrinkHeader} from '@/lib/functions'
import Logo from '@/components/logo'
import Navigation from '@/components/Navigation'

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
      <div className="wrap flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}
