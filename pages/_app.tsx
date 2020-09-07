import React from 'react'
import type {AppProps} from 'next/app'
import '@/styles/index.css'

/**
 * Core Web Vitals Reporting.
 *
 * Uncomment if interested in seeing the data in the console.
 *
 * @see https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */
// export function reportWebVitals(metric: Record<string, unknown>) {
//   console.log(metric)
// }

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
