import {useEffect, useState} from 'react'

/**
 * Determine and return scroll position.
 */
export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [ticking, setTicking] = useState(false)

  useEffect(() => {
    let last_known_scroll_position = 0

    const handleScroll = (element: Event) => {
      last_known_scroll_position = window.scrollY

      if (ticking === false) {
        window.requestAnimationFrame(() => {
          setScrollPosition(last_known_scroll_position)
          setTicking(false)
        })

        setTicking(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return scrollPosition
}
