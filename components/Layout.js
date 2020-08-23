import PropTypes from 'prop-types'
import SiteHead from '@/components/SiteHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import config from '@/lib/config'

export default function Layout({children, ...props}) {
  return (
    <div className="space-y-8">
      <SiteHead title={props.title} description={props.description} />
      <Header />
      <main className="wrap site-content">{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: config.siteName,
  description: config.siteDescription
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.array.isRequired
}
