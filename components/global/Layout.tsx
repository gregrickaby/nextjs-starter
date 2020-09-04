import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
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
