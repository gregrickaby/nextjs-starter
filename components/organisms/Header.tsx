import React, {useEffect, useRef} from 'react'
import Navigation from '../../components/molecules/Navigation'
import Logo from '../../components/molecules/Logo'
import useScrollPosition from '../../hooks/useScrollPosition'

const Header: React.FC = () => {
  const headerRef = useRef(null)
  const scrollY = useScrollPosition()

  useEffect(() => {
    if (scrollY > 30) {
      headerRef.current.classList.add('shrink')
    } else {
      headerRef.current.classList.remove('shrink')
    }
  })
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

export default Header
