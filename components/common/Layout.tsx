import React from 'react'
import Meta from '@/components/common/Meta'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import SiteConfig from 'site.config'

type LayoutProps = {
  children: React.ReactElement
  author?: string
  title?: string
  description?: string
  siteUrl?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  author = SiteConfig.author,
  title = SiteConfig.siteName,
  description = SiteConfig.siteDescription,
  siteUrl = SiteConfig.siteUrl
}: LayoutProps) => {
  return (
    <>
      <Meta
        author={author}
        title={title}
        description={description}
        siteUrl={siteUrl}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
