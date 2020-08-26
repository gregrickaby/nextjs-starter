import PropTypes from 'prop-types'
import SiteHead from './SiteHead'
import Header from './Header'
import Footer from './Footer'
import config from '@/lib/config'

export default function Layout({children, ...props}) {
  return (
    <div className="space-y-8">
      <SiteHead title={props.title} description={props.description} />
      <Header />
      <main className="site-content max-w-3xl mx-auto px-4 lg:px-0">
        {children}
      </main>
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
