import PropTypes from 'prop-types'
import SiteHead from './SiteHead'
import Header from './Header'
import Footer from './Footer'
import config from '@/lib/config'

export default function Layout({children, ...props}) {
  return (
    <>
      <SiteHead title={props.title} description={props.description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  description: config.siteDescription,
  title: config.siteName
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
}
