import React from 'react'
import SiteConfig from 'site.config'
import Layout from '@/components/common/Layout'
import Hero from '@/components/organisms/Hero'

const HomePage: React.FC = () => {
  return (
    <Layout
      title={SiteConfig.siteName}
      description={SiteConfig.siteDescription}
    >
      <Hero
        background="https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=70"
        title="Next.js Starter"
        description="A slightly opinionated, yet bare-bones Next.js starter."
      />
    </Layout>
  )
}

export default HomePage
