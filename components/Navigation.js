import Link from 'next/link'
import config from '@/lib/config'

export default function Navigation() {
  return (
    <nav className="flex items-center space-x-2">
      {config.navigation.map((item, index) => (
        <Link href={item.href} key={index}>
          <a className="underline hover:no-underline">{item.label}</a>
        </Link>
      ))}
    </nav>
  )
}
