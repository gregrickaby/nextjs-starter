# The Best Damn Next.js Starter <!-- omit in toc -->

I'm love standards and hate repeating myself.

I was copying/pasting the same configs, pages, and components from one Next.js project to another. Frustrated, I decided to create **a slightly opinionated, yet still bare-bones Next.js starter** for building websites.

Behold 👉https://the-best-damn-nextjs-starter.vercel.app/

---

## 🗂 Table of Contents <!-- omit in toc -->

- [✨ Features](#-features)
- [🔧 Setup](#-setup)
  - [Install](#install)
  - [Global Config](#global-config)
  - [Styles](#styles)
    - [TailwindCSS](#tailwindcss)
    - [CSS Modules or Sass](#css-modules-or-sass)
  - [Site Icons & Favicons](#site-icons--favicons)
  - [SEO](#seo)
    - [Global](#global)
    - [Page Level](#page-level)
  - [Progressive Web App (Optional)](#progressive-web-app-optional)
- [⌨️ Contributing](#️-contributing)

---

## ✨ Features

Out of the box:

- TailwindCSS
- Prettier
- ESLint
- Stylelint
- PropTypes
- Bare-bones styles
- Global config file
- `<Layout>` component
- SEO at the page level
- Perfect Lighthouse scores
- Can easily be made into a PWA
- Ready for hosting at vercel.com

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

### Styles

#### TailwindCSS

This starter leverages all the features that come with [TailwindCSS](https://tailwindcss.com/). Styling can be acomplished with one (or any combination) of the following:

- Presentational classes in JSX
- Use the [`@apply` directive](https://tailwindcss.com/docs/functions-and-directives#apply) in `/styles/index.css`
- By [creating a theme](https://tailwindcss.com/docs/theme) in `tailwind.config.js`

Learn more about working with [TailwindCSS](https://tailwindcss.com/docs/preflight).

#### CSS Modules or Sass

If Tailwind isn't your jam, feel free to use CSS Modules or Sass, which come [baked into Next.js](https://nextjs.org/docs/basic-features/built-in-css-support)-- no additional configuration needed.

### Site Icons & Favicons

1. Create your own maskable icon and favicon using these tools:

   - https://maskable.app/editor
   - https://www.favicon-generator.org/

2. Place your new icons in `/public/favicon`

3. Edit both the `site.webmanifest` and `browserconfig.xml` to meet your needs.

### SEO

#### Global

Start by editing the [Global Config](#global-config) file. Values are passed down as props to the [`<SiteHead>` component](https://github.com/gregrickaby/nextjs-starter/blob/main/components/SiteHead.js).

#### Page Level

Simply pass in a `title` and `description` at the page level like so:

```js
import Layout from '@/components/Layout'

export default function Contact() {
  return (
    <Layout title="Contact" description="Get in touch!">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Blah blah...</p>
    </Layout>
  )
}
```

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

Even though this starter is built specifically for my needs? I would still love your feedback and welcome contributions via Github [Issues](https://github.com/gregrickaby/nextjs-starter/issues) and [Pull Requests](https://github.com/gregrickaby/nextjs-starter/pulls).
