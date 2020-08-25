import PropTypes from 'prop-types'
import Layout from '@/components/Layout'
import {fetcher} from '@/lib/functions'

export default function StaticGeneration(props) {
  return (
    <Layout
      title="Static Generation (SSG)"
      description="A statically generated page with data from a REST-API."
    >
      <h1>Profile</h1>

      <section className="flex items-center p-4 rounded bg-gray-400">
        <a href={props.data.url}>
          <img
            alt={props.data.name}
            className="rounded"
            loading="lazy"
            src={props.data.avatar_urls[96]}
            height="96"
            width="96"
          />
        </a>
        <div className="ml-4">
          <h1>{props.data.name}</h1>
          <p dangerouslySetInnerHTML={{__html: props.data.description}} />
        </div>
      </section>

      <p className="mt-8">
        <em>
          This page uses dynamic data from a REST-API and was statically
          generated using{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation">
            getStaticProps()
          </a>
          .
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
  const data = await fetcher(`https://gregrickaby.com/wp-json/wp/v2/users/1`)
  return {props: {data}}
}

StaticGeneration.propTypes = {
  data: PropTypes.shape({
    avatar_urls: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string
  })
}
