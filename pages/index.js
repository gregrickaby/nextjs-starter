import config from '@/lib/config'
import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <h1>Home</h1>
      <p>I love standards... but hate repeating myself.</p>
      <p>
        For every new Next.js project I would literally copy & paste the same
        configurations, pages, and components from previous projects into a new
        one. After some research, I discovered that <code>create-next-app</code>{' '}
        <a href="https://www.npmjs.com/package/create-next-app#options">
          works with git repositories!
        </a>{' '}
      </p>
      <p>
        <strong>
          I decided to create a slightly opinionated, yet still bare-bones
          Next.js starter that I could use when starting new projects.
        </strong>
      </p>
      <p>
        Click the menu above to see the demo pages and please consider giving
        the Github repo a star:{' '}
        <a href="https://github.com/gregrickaby/nextjs-starter">
          https://github.com/gregrickaby/nextjs-starter
        </a>
      </p>
    </Layout>
  )
}
