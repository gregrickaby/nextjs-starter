import PropTypes from 'prop-types'
import Layout from '@/components/global/Layout'
import {fetcher} from '@/lib/functions'
import Link from 'next/link'
import {AlertInfo} from '@/components/shared/Alerts'

export default function IncrementalStaticRegeneration(props) {
  return (
    <Layout
      title="Incremental Static Regeneration (ISG)"
      description="A static page that updates in the background every 60 seconds."
    >
      <h1>Incremental Static Regeneration (ISG) Example</h1>

      <AlertInfo>
        The content below is sourced from the WordPress REST-API.{' '}
        <a href="https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration">
          Learn more about ISG.
        </a>
      </AlertInfo>

      <section>
        {props.data.map((post, index) => (
          <article key={index}>
            <h1>
              <Link href={`/posts/${post.id}`}>
                <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
              </Link>
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
export async function getStaticProps() {
  const data = await fetcher('https://nextjs.wpengine.com/wp-json/wp/v2/posts')
  return {props: {data}, revalidate: 60}
}

IncrementalStaticRegeneration.propTypes = {
  data: PropTypes.object
}
