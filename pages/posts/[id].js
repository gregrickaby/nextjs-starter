import PropTypes from 'prop-types'
import Layout from '@/components/global/Layout'
import {fetcher} from '@/lib/functions'
import {AlertInfo} from '@/components/shared/Alerts'

export default function BlogPost({post}) {
  return (
    <Layout title={post.title.rendered} description={post.excerpt.rendered}>
      <div className="container">
        <AlertInfo>
          The content below is sourced from the WordPress REST-API.{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation">
            Learn more about SSG.
          </a>
        </AlertInfo>

        <section>
          <article>
            <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
            <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
          </article>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await fetcher('https://nextjs.wpengine.com/wp-json/wp/v2/posts')

  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: `${post.id}`
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const post = await fetcher(
    `https://nextjs.wpengine.com/wp-json/wp/v2/posts/${params.id}`
  )

  return {props: {post}}
}

BlogPost.propTypes = {
  post: PropTypes.object
}
