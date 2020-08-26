import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout title="About" description="Learn more about this website">
      <h1>About</h1>
      <div
        className="flex items-center bg-blue-500 text-white px-4 mb-8 rounded shadow"
        role="alert"
      >
        <svg
          className="fill-current w-4 h-4 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        </svg>
        <p className="pt-4">
          This is a basic page.{' '}
          <a href="https://nextjs.org/docs/basic-features/pages">
            Learn more about pages.
          </a>
        </p>
      </div>
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
