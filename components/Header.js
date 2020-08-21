import config from '@/lib/config'
import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="max-w-sm m-auto p-4">
      <img
        className="mx-auto"
        src="/logo.svg"
        alt="site logo"
        height="128"
        width="128"
      />
      <h1 className="mt-2 text-3xl font-bold leading-tight">
        {config.siteName}
      </h1>
      <p className="text-1xl my-4 italic">{config.siteDescription}</p>
      <Navigation />
    </header>
  )
}
