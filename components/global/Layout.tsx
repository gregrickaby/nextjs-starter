import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import config from '@/lib/config'

export default function Layout({children, ...props}) {
  return (
    <>
      <Meta title={props.title} description={props.description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
