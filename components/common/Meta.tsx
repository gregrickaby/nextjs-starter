import React from 'react'
import Head from 'next/head'
import {MetaProps} from '../../interfaces'

const Meta: React.FC<MetaProps> = (props: MetaProps) => {
  return (
    <Head>
      <title>
        {props.title} - {props.description}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={props.description} />
      <meta name="msapplication-TileColor" content="#fffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={props.siteUrl} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta
        name="twitter:image"
        content={`${props.siteUrl}/favicon/android-icon-192x192.png`}
      />
      <meta name="twitter:creator" content={props.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:url" content={props.siteUrl} />
      <meta
        property="og:image"
        content={`${props.siteUrl}/favicon/apple-icon.png`}
      />
    </Head>
  )
}

export default Meta
