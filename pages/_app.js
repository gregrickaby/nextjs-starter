import PropTypes from 'prop-types'
import '@/styles/index.css'

/**
 * Support for Core Web Vitals.
 *
 * Note: Delete this if you're not interested in using.
 *
 * @see https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */
export function reportWebVitals(metric) {
  console.log(metric)
}

const App = ({Component, pageProps}) => <Component {...pageProps} />

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
