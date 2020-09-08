import React from 'react'
import {GetStaticPaths, GetStaticProps} from 'next'
import Layout from '@/components/common/Layout'
import {fetcher} from '@/functions/index'
import {Info} from '@/components/molecules/Alert'
import {PostProps} from '@/interfaces/index'

interface Posts extends PostProps {
  post: PostProps
}

const BlogPost: React.FC<Posts> = ({post}: Posts) => {
  return (
    <Layout title={post.title.rendered} description={post.excerpt.rendered}>
      <div className="container">
        <Info>
          The content below is sourced from the WordPress REST-API.{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation">
            Learn more about SSG.
          </a>
        </Info>

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

export default BlogPost

/**
 * At build time, define a list of paths to be rendered.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetcher('https://nextjs.wpengine.com/wp-json/wp/v2/posts')

  return {
    paths: posts.map((post: Record<string, unknown>) => {
      return {
        params: {
          id: `${post.id}`
        }
      }
    }),
    fallback: false
  }
}

/**
 * At build time, fetch the REST-API data, pass the data into the page via props.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getStaticProps: GetStaticProps = async ({params}) => {
  const post: Record<string, unknown> = await fetcher(
    `https://nextjs.wpengine.com/wp-json/wp/v2/posts/${params.id}`
  )
  return {props: {post}}
}
