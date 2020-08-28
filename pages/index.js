import config from '@/lib/config'
import Layout from '@/components/global/Layout'
import Hero from '@/components/shared/Hero'

export default function HomePage() {
  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <Hero
        title="Next.js Starter"
        description="A slightly opinionated, yet still bare-bones Next.js starter."
      />
    </Layout>
  )
}
