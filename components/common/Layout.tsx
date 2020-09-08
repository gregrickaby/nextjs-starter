import React from 'react'
import Meta from '@/components/common/Meta'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import {MetaProps} from '../../interfaces'
import SiteConfig from 'site.config'

export interface LayoutProps extends MetaProps {
  /**
   * Required. Content between the &lt;main&gt;
   */
  children: React.ReactElement
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
