<div align="center">

<h1><em>The</em> Next.js Starter</h1>
<p>A slightly opinionated, yet bare-bones Next.js starter.</p>

<img alt="Logo" src="https://dl.dropboxusercontent.com/s/73uazv62zq7h4pn/nextjs-starter-logo.png?dl=0" height="200" />

https://the-nextjs-starter.vercel.app/

<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/gregrickaby/nextjs-starter/next?style=flat-square">
<img alt="GitHub package.json dependency version (dev)" src="https://img.shields.io/github/package-json/dependency-version/gregrickaby/nextjs-starter/dev/tailwindcss?style=flat-square">
<img alt="GitHub package.json dependency version (dev)" src="https://img.shields.io/github/package-json/dependency-version/gregrickaby/nextjs-starter/dev/@storybook/react?style=flat-square">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/gregrickaby/nextjs-starter?style=flat-square">
</div>

---

✨ **Behold...The Features** ✨

- TailwindCSS
- Storybook
- React Hooks
- Prettier
- ESLint
- Stylelint
- PropTypes
- Minimal styles
- Global config file
- SEO at the page level
- PWA Ready
- Ready for hosting at Vercel

---

## 🗂 Table of Contents <!-- omit in toc -->

- [🚀 Install](#-install)
- [🔧 Setup](#-setup)
  - [Global Config](#global-config)
  - [Styles](#styles)
    - [TailwindCSS](#tailwindcss)
    - [CSS Modules or Sass](#css-modules-or-sass)
  - [Site Icons & Favicons](#site-icons--favicons)
  - [SEO](#seo)
    - [Global](#global)
    - [Page Level](#page-level)
  - [Hosting at Vercel (optional)](#hosting-at-vercel-optional)
  - [Progressive Web App (optional)](#progressive-web-app-optional)
- [:octocat: Contributing](#octocat-contributing)
- [Credits](#credits)

---

## 🚀 Install

Use [create-next-app](https://www.npmjs.com/package/create-next-app) to install:

```bash
yarn create next-app --example https://github.com/gregrickaby/nextjs-starter
```

Inside the app directory, you can run several commands.

Start the development server:

```bash
yarn dev
```

Build the app for production:

```bash
yarn build
```

Run the built app in production mode:

```bash
yarn start
```

---

## 🔧 Setup

### Global Config

The global config file `lib/config.js` contains several constants used throughout this starter. Adjust to meet your needs:

```js
// lib/config.js
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

---

### Styles

#### TailwindCSS

This starter leverages all the features that come with [TailwindCSS](https://tailwindcss.com/). Styling can be accomplished with one (or any combination) of the following:

- Presentational classes in JSX
- Use the [`@apply` directive](https://tailwindcss.com/docs/functions-and-directives#apply) in `/styles/index.css`
- By [creating a theme](https://tailwindcss.com/docs/theme) in `tailwind.config.js`

Learn more about working with [TailwindCSS](https://tailwindcss.com/docs/preflight).

#### CSS Modules or Sass

If Tailwind isn't your jam, feel free to use CSS Modules or Sass, which come [baked into Next.js](https://nextjs.org/docs/basic-features/built-in-css-support)-- no additional configuration needed.

---

### Site Icons & Favicons

1. Create your own maskable icon and favicon using these tools:

   - https://maskable.app/editor
   - https://www.favicon-generator.org/

2. Place your new icons in `public/favicon`

3. Edit both the `site.webmanifest` and `browserconfig.xml` to meet your needs.

---

### SEO

#### Global

Start by editing the [Global Config](#global-config) file. Values are automatically passed down as props to the [`<SiteHead>` component](https://github.com/gregrickaby/nextjs-starter/blob/main/components/SiteHead.js).

The `<SiteHead>` component also contains the necessary tags for Facebook and Twitter.

#### Page Level

Simply pass in a `title` and `description` prop at the page level like so:

```js
// pages/contact.js
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

---

### Hosting at Vercel (optional)

The starter ships with a `vercel.json` file.

If you already have an account with Vercel and it's [connected to your Github account](https://vercel.com/docs/git-integrations/vercel-for-github)...then magic awaits.

When you push this to a new repository on Github, Vercel will _automagically_ deploy a new hosting project, create preview URLs, and drop a link to the production URL in the repo description. 🤯

Learn more about Vercel [configuration options](https://vercel.com/docs/configuration).

---

### Progressive Web App (optional)

If you want to turn your website into a [Progressive Web App](https://web.dev/progressive-web-apps/) (PWA), it couldn't be easier:

1. Install [Next PWA](https://www.npmjs.com/package/next-pwa)

```bash
yarn add next-pwa
```

2. Create a new file named `next.config.js` in the root of the app

3. Copy & paste the following code and save:

```js
// next.config.js
const withPWA = require('next-pwa')
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  }
})
```

---

## :octocat: Contributing

I would love feedback contributions via Github [Issues](https://github.com/gregrickaby/nextjs-starter/issues) and [Pull Requests](https://github.com/gregrickaby/nextjs-starter/pulls). 🍻

## Credits

Illustration by Maria Shukshina from <a href="https://icons8.com/">Icons8</a>
