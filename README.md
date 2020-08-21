# The Best Damn Next.js Starter <!-- omit in toc -->

I love standards... but hate repeating myself.

For every new Next.js project, I would literally copy & paste the same configurations, pages, and components from previous projects into a new one.

After some research, I discovered that **`create-next-app`** [works with](https://www.npmjs.com/package/create-next-app#options) git repositories! I had a 💡 moment, and decided to create **a slightly opinionated, yet still bare-bones Next.js starter** that I could use when starting new projects.

👉 https://the-best-damn-nextjs-starter.vercel.app/

✨ **Behold...The Features** ✨

- TailwindCSS
- Prettier
- ESLint
- Stylelint
- PropTypes
- Bare-bones styles
- Global config file
- Global `<Layout>` component
- SEO at the page level
- Can easily be made into a PWA
- Ready for hosting at vercel.com

🛑 **_Wait!_ There's more!**

Lighthouse scores:

![lighthouse-screenshot](https://dl.dropbox.com/s/0qkqq9r9vslhv5q/Screen%20Shot%202020-08-21%20at%204.05.28%20PM.png?dl=0)

WebPageTest scores:

![webpagetest-screenshot](https://dl.dropbox.com/s/mrm5nn3q2m1aams/Screen%20Shot%202020-08-21%20at%204.08.41%20PM.png?dl=0)

WOW! 👏🏻

So what are you waiting for? Install the **Best Damn Next.js Starter** now and start saving time (and 💰), today!

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

---

## 🚀 Install

Installation is easy with `create-next-app`:

```bash
npx create-next-app my-app --example https://github.com/gregrickaby/nextjs-starter
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

Even though this starter was built specifically for my needs...I would still love feedback and would ❤️ contributions via Github [Issues](https://github.com/gregrickaby/nextjs-starter/issues) and [Pull Requests](https://github.com/gregrickaby/nextjs-starter/pulls). 🍻

✌️
