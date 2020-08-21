import Link from 'next/link'
import config from '@/lib/config'

export default function Navigation() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {config.navigation.map((item, index) => (
        <Link href={item.href} key={index}>
          <a className="hover:underline">{item.label}</a>
        </Link>
      ))}
    </div>
  )
}
