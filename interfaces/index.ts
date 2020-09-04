/**
 * @type {object}
 */
export type Post = {
  id: number /** the WordPress post id */
  title: {
    rendered: string /** the post title */
  }
  excerpt: {
    rendered: string /** the post excerpt */
  }
}
