import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import config from '@/lib/config'

type Props = {
  children: React.ReactNode
} & typeof defaultProps

const defaultProps = {
  title: config.siteName,
  description: config.siteDescription
}

export default function Layout({children, ...props}: Props) {
  return (
    <>
      <Meta title={props.title} description={props.description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
