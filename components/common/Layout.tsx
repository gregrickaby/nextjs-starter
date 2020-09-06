import React from 'react'
import Meta from '@/components/common/Meta'
import Header from '@/components/organisms/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'
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
