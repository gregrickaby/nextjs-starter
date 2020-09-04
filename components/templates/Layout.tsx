import React from 'react'
import Meta from '@/components/organisms/Meta'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import config from '@/lib/config'

type LayoutProps = {
  children: React.ReactElement
  author?: string
  title?: string
  description?: string
  siteUrl?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  author = config.author,
  title = config.siteName,
  description = config.siteDescription,
  siteUrl = config.siteUrl
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
