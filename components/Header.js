import {useEffect, useRef} from 'react'
import {shrinkHeader} from '@/lib/functions'
import Logo from '@/components/Logo'
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
      <div className="max-w-3xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}
