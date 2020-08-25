import PropTypes from 'prop-types'
import Layout from '@/components/Layout'
import {fetcher} from '@/lib/functions'

export default function ServerSideRendering(props) {
  return (
    <Layout
      title="Server-side Rendering (SSR)"
      description="A server-side rendered page with data from a REST-API."
    >
      <h1>Latest Blog Posts</h1>

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
          This page is generated in real-time using Server-side Rendering (SSR)
          from{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering">
            <strong>getServerSideProps()</strong>
          </a>
          . The data is sourced from the WordPress REST-API.
        </p>
      </div>

      <section>
        {props.data.map((post, index) => (
          <article key={index}>
            <h1>
              <a
                href={`https://www.reddit.com${post.link}`}
                dangerouslySetInnerHTML={{__html: post.title.rendered}}
              />
            </h1>
            <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
          </article>
        ))}
      </section>
    </Layout>
  )
}

/**
 * At build time, fetch the REST-API data, pass the data in via props.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getServerSideProps() {
  const data = await fetcher(`https://gregrickaby.com/wp-json/wp/v2/posts`)
  return {props: {data}}
}

ServerSideRendering.propTypes = {
  data: PropTypes.object
}
