import React from 'react'
import Link from 'next/link'
import SiteConfig from '../../site.config'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container p-4 lg:px-0 text-center text-sm">
        &copy; {new Date().getFullYear()} {SiteConfig.siteName} by{' '}
        {SiteConfig.author} &middot;{' '}
        <Link href={SiteConfig.social.github.href}>
          <a>Github</a>
        </Link>{' '}
        &middot;{' '}
        <Link href={SiteConfig.social.twitter.href}>
          <a>Twitter</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
