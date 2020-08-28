import config from '@/lib/config'
import Layout from '@/components/global/Layout'
import Hero from '@/components/shared/Hero'

export default function HomePage() {
  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <Hero
        background={{
          backgroundImage:
            'https://i.picsum.photos/id/1059/1280/720.jpg?hmac=3ajpkbtku_zopsq04qdo4zx56f7j3j_esi0aqhxgad8'
        }}
        title="Next.js Starter"
        description="A slightly opinionated, yet still bare-bones Next.js starter."
      />
    </Layout>
  )
}
