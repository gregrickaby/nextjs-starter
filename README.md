# Next.js Starter

I'm love standards.

So instead of copying/pasting the same configs, pages, and components from one Next.js project to another? **I decided to create a slightly opinionated, yet still bare-bones Next.js starter.**

Behold, the best damn Next.js Starter out there!

👉https://the-best-damn-nextjs-starter.vercel.app/

---

## Features

Out of the box:

- TailwindCSS
- Prettier
- ESLint
- Stylelint
- Typechecking with [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- Bare-bones styles and opinions
- `<Layout>` component for consistant styles from page-to-page
- Global config available in `/lib/config.js`
- SEO at the page level
- Perfect Lighthouse scores
- Can easily be made into a PWA

---

## 🔧 Setup

### Install

To get started:

```bash
npx create-next-app my-app --example https://github.com/gregrickaby/nextjs-starter
```

### Global Config

The global config file `/lib/config.js` contains several constants used throughout this starter. Adjust to meet your needs:

```js
const config = {
  siteName: 'Site Name',
  siteDescription: 'The description of this website',
  siteUrl: 'https://yourname.vercel.app',
  author: '@yourname',
  navigation: [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'Contact', href: '/contact'}
  ],
  social: {
    github: {
      label: 'Github',
      href: 'https://github.com/yourname/'
    },
    twitter: {
      label: 'Twitter',
      href: 'https://twitter.com/yourname/'
    }
  }
}

export default config
```

### Styles and CSS

#### TailwindCSS

This starter leverages all the features that come with [TailwindCSS](https://tailwindcss.com/). Styling can be acomplished with one (or any combination) of the following:

- Presentational classes in JSX
- Use the [`@apply` directive](https://tailwindcss.com/docs/functions-and-directives#apply) in `/styles/index.css`
- By [creating a theme](https://tailwindcss.com/docs/theme) in `tailwind.config.js`

Learn more about working with [TailwindCSS](https://tailwindcss.com/docs/preflight).

#### CSS Modules or Sass

If Tailwind isn't your jam, feel free to use CSS Modules or Sass, which come [baked into Next.js](https://nextjs.org/docs/basic-features/built-in-css-support), with no additional configuration needed.

### Site Icons & Favicons

1. Create your own maskable icon and favicon using these tools:

   - https://maskable.app/editor
   - https://www.favicon-generator.org/

2. Place your new icons in `/public/favicon`

3. Edit both the `site.webmanifest` and `browserconfig.xml` to meet your needs.

### Progressive Web App (Optional)

If you want to turn your website into a [Progressive Web App](https://web.dev/progressive-web-apps/) (PWA), it couldn't be easier:

1. Install [Next PWA](https://www.npmjs.com/package/next-pwa)

```bash
yarn add next-pwa
```

2. Create a new file named `next.config.js` in the root of the app

3. Copy & Paste the following and save:

```js
const withPWA = require('next-pwa')
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  }
})
```

---

## ⌨️ Contributing

I would love your feedback and welcome contributions via Issues and Pull Requests.
