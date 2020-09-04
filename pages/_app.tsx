import type {AppProps} from 'next/app'
import '@/styles/index.css'

/**
 * Support for Core Web Vitals.
 *
 * Note: Delete this if you're not interested in using CWV.
 *
 * @see https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */
export function reportWebVitals(metric: Record<string, unknown>) {
  console.log(metric)
}

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
