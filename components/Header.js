import config from '@/lib/config'
import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="/logo.svg" alt="site logo" height="128" width="128" />
        <h1 className="hidden md:block font-bold">{config.siteName}</h1>
        <p className="hidden md:block italic">{config.siteDescription}</p>
      </div>
      <Navigation />
    </header>
  )
}
