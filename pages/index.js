import config from '@/lib/config'
import Layout from '@/components/global/Layout'
import Hero from '@/components/shared/Hero'

export default function HomePage() {
  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <Hero
        background="https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=70"
        title="Next.js Starter"
        description="A slightly opinionated, yet still bare-bones Next.js starter."
      />
    </Layout>
  )
}
