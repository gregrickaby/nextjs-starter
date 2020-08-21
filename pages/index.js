import config from '@/lib/config'
import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <h1>Welcome to the Home page.</h1>
    </Layout>
  )
}
