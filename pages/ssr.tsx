import React, {ReactElement} from 'react'
import {GetServerSideProps} from 'next'
import Link from 'next/link'
import {Post} from '@/interfaces/index'
import {fetcher} from '@/lib/functions'
import Layout from '@/components/templates/Layout'
import {Info} from '@/components/organisms/Alerts'

type Props = {
  data: []
}

const SSR: React.FC<Props> = ({data}: Props) => {
  return (
    <Layout
      title="Server-side Rendering (SSR)"
      description="A server-side rendered page with data from a REST-API."
    >
      <div className="container">
        <h1>Server-side Rendering (SSR) Example</h1>

        <Info>
          The content below is sourced from the WordPress REST-API.{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering">
            Learn more about SSR.
          </a>
        </Info>

        <section>
          {data.map(
            (post: Post, index: number): ReactElement => (
              <article key={index}>
                <h1>
                  <Link href={`/posts/${post.id}`}>
                    <a
                      dangerouslySetInnerHTML={{__html: post.title.rendered}}
                    />
                  </Link>
                </h1>
                <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
              </article>
            )
          )}
        </section>
      </div>
    </Layout>
  )
}

export default SSR

/**
 * At build time, fetch the REST-API data, pass the data in via props.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getServerSideProps: GetServerSideProps = async () => {
  const data: Record<string, unknown> = await fetcher(
    'https://nextjs.wpengine.com/wp-json/wp/v2/posts'
  )
  return {props: {data}}
}
