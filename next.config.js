/**
 * Common configuration options for Next.js.
 *
 * Note: This file was included as a reference,
 * it's safe to delete.
 *
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = {
  basePath: '',
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: false
  },
  async redirects() {
    return [
      {
        source: '/foo',
        destination: '/about',
        permanent: true
      }
    ]
  }
}
