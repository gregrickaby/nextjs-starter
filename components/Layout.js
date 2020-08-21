import PropTypes from 'prop-types'
import SiteHead from '@/components/SiteHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import config from '@/lib/config'

export default function Layout({children, ...props}) {
  return (
    <div className="max-w-xs pt-12 m-auto text-center">
      <SiteHead title={props.title} description={props.description} />
      <Header />
      <main>{children}</main>
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
  children: PropTypes.object.isRequired
}
