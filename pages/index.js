import config from '@/lib/config'
import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <h1>Home</h1>
    </Layout>
  )
}
