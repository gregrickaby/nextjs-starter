// Generic data fetcher.
// @ts-ignore: (...args) input not provided
export const fetcher = (...args) => fetch(...args).then((res) => res.json())

/**
 * On scroll, add or remove a "shrink" class.
 *
 * @param {object} el The header element.
 */
export function shrinkHeader(el) {
  /* eslint-disable */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      el.current.classList.add('shrink')
    } else {
      el.current.classList.remove('shrink')
    }
  })
  /* eslint-enable */
}
