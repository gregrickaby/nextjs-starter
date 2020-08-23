import {useEffect, useRef} from 'react'
import config from '@/lib/config'
import {shrinkHeader} from '@/lib/functions'
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
      <div className="wrap">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logo.svg" alt="site logo" height="128" width="128" />
            {/* <h1 className="hidden md:block font-bold">{config.siteName}</h1>
          <p className="hidden md:block italic">{config.siteDescription}</p> */}
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  )
}
