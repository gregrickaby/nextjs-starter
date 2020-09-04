/**
 * @type {object}
 */
export interface Post {
  id: number /** the WordPress post id */
  title: {
    rendered: string /** the post title */
  }
  excerpt: {
    rendered: string /** the post excerpt */
  }
  content: {
    rendered: string /** the post content */
  }
}
