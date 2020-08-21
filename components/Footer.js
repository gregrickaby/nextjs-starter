import Link from 'next/link'
import config from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-white">
      <section className="flex justify-center items-center gap-x-2 py-2">
        &copy; {new Date().getFullYear()} - {config.siteName} |
        <Link href={config.social.github.href}>
          <a>Github</a>
        </Link>
        <Link href={config.social.twitter.href}>
          <a>Twitter</a>
        </Link>
      </section>
    </footer>
  )
}
