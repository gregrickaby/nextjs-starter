/**
 * The shape of a WordPress post returned from the WordPress REST-API.
 *
 * @type {object}
 */
export interface PostProps {
  /**
   * The WordPress post ID.
   */
  id: number
  /**
   * The post title.
   */
  title: {
    rendered: string
  }
  /**
   * The post excerpt.
   */
  excerpt: {
    rendered: string
  }
  /**
   * The post content.
   */
  content: {
    rendered: string
  }
}
