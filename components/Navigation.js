import Link from 'next/link'
import config from '@/lib/config'

export default function Navigation() {
  return (
    <nav className="flex items-center">
      {config.navigation.map((item, index) => (
        <Link href={item.href} key={index}>
          <a className="ml-12 transition-colors duration-200 ease-in-out hover:text-gray-600">
            {item.label}
          </a>
        </Link>
      ))}
    </nav>
  )
}
