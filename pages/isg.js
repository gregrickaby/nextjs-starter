import PropTypes from 'prop-types'
import Layout from '@/components/Layout'
import {fetcher} from '@/lib/functions'

export default function IncrementalStaticRegeneration(props) {
  const posts = props.data.data.children
  return (
    <Layout
      title="Incremental Static Regeneration (ISG)"
      description="A static page that updates every 60 seconds."
    >
      <h1>The latest from r/all</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="space-y-4 text-center p-4 rounded bg-gray-400"
          >
            <img
              alt={post.data.title}
              className="rounded m-auto mb-4"
              loading="lazy"
              src={post.data.thumbnail}
              height="96"
              width="96"
            />
            <a
              href={`https://www.reddit.com${post.data.permalink}`}
              dangerouslySetInnerHTML={{__html: post.data.title}}
            />
            <p>&uarr; {post.data.ups}</p>
          </div>
        ))}
      </section>
      <p className="mt-8 text-center">
        <em>
          This page uses dynamic data from a REST-API and was statically
          generated using{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation">
            getStaticProps()
          </a>
          . This page is also{' '}
          <a href="https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration">
            incrementally rebuilt
          </a>{' '}
          every 60 seconds.
        </em>
      </p>
    </Layout>
  )
}

/**
 * At build time, fetch the REST-API data, pass the data in via props.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps() {
  const data = await fetcher(`https://www.reddit.com/r/all/.json?limit=9`)
  return {props: {data}, revalidate: 60}
}

IncrementalStaticRegeneration.propTypes = {
  data: PropTypes.object
}
