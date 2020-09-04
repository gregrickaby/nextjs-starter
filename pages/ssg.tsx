import React from 'react'
import {GetStaticProps} from 'next'
import Layout from '@/components/global/Layout'
import {fetcher} from '@/lib/functions'
import Link from 'next/link'
import {Info} from '@/components/blocks/Alerts'
import {Post} from '@/interfaces/index'

type Props = {
  data: Record<string, unknown>
}

const SSG: React.FC<Props> = ({data}: Props) => {
  return (
    <Layout
      title="Static Generation (SSG)"
      description="A statically generated page with data from a REST-API."
    >
      <div className="container">
        <h1>Static Generation (SSG) Example</h1>

        <Info>
          The content below is sourced from the WordPress REST-API.{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation">
            Learn more about SSG.
          </a>
        </Info>

        <section>
          {data.map((post: Post, index: number) => (
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
      </div>
    </Layout>
  )
}

export default SSG

/**
 * At build time, fetch the REST-API data, pass the data in via props.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getStaticProps: GetStaticProps = async () => {
  const data: Record<string, unknown> = await fetcher(
    'https://nextjs.wpengine.com/wp-json/wp/v2/posts'
  )
  return {props: {data}}
}
