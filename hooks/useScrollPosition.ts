import {useEffect, useState} from 'react'

/**
 * Determine and return scroll position.
 *
 * @return {number} The current scroll position in pixels.
 */
export default function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}
