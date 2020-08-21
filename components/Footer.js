import Link from 'next/link'
import config from '@/lib/config'

export default function Footer() {
  return (
    <footer className="text-center text-sm border-t-2 border-gray-400 pt-2">
      &copy; {new Date().getFullYear()} {config.siteName} &middot;{' '}
      <Link href={config.social.github.href}>
        <a>Github</a>
      </Link>{' '}
      &middot;{' '}
      <Link href={config.social.twitter.href}>
        <a>Twitter</a>
      </Link>
    </footer>
  )
}
