import useSWR from 'swr'

// Generic fetcher for the SWR library.
// https://swr.vercel.app/getting-started#quick-start
const fetcher = (...args) => fetch(...args).then((res) => res.json())

/**
 * A reusable hook for data fetching.
 *
 * @param {string} endpoint  The API URL to fetch data from.
 * @link https://swr.vercel.app/getting-started#make-it-reusable
 */
export function useFetchData(endpoint) {
  const {data, error} = useSWR(endpoint, fetcher)
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

/**
 * On scroll, add or remove a "shrink" class.
 *
 * @param {object} el The header element.
 */
export function shrinkHeader(el) {
  /* eslint-disable */
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 25) {
      el.current.classList.add('shrink')
    } else {
      el.current.classList.remove('shrink')
    }
  })
  /* eslint-enable */
}
