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

- [TailwindCSS](https://tailwindcss.com)
- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
- [Storybook](https://storybook.js.org)
- [Chromatic](https://www.chromatic.com)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- Typechecking with [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [Vercel](https://vercel.com/) hosting ready
- Minimal styles
- Global config file
- SEO at the page level
- PWA Ready

---

## 🗂 Table of Contents <!-- omit in toc -->

- [🚀 Development](#-development)
  - [Install](#install)
  - [Working with Next.js](#working-with-nextjs)
- [🔧 Project Overview](#-project-overview)
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
- [⚛ Atomic Design](#-atomic-design)
- [📚 Storybook](#-storybook)
  - [About](#about)
  - [Configuration](#configuration)
  - [Stories](#stories)
- [♻️ Chromatic (optional)](#️-chromatic-optional)
  - [About](#about-1)
  - [Configuration](#configuration-1)
- [:octocat: Contributing](#octocat-contributing)
- [🙌🏻 Credits & License](#-credits--license)

---

## 🚀 Development

### Install

Use [create-next-app](https://www.npmjs.com/package/create-next-app) to get up and running with either Yarn or NPX.

**Yarn**

```bash
yarn create next-app nextjs-starter --example https://github.com/gregrickaby/nextjs-starter
```

**NPX**

```bash
npx create-next-app nextjs-starter --example https://github.com/gregrickaby/nextjs-starter
```

---

### Working with Next.js

Inside the `nextjs-starter` directory, you can run several commands.

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

## 🔧 Project Overview

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

Start by editing the [Global Config](#global-config) file. Values are automatically passed down as props to the [`<Meta>` component](https://github.com/gregrickaby/nextjs-starter/blob/main/components/global/Meta.js).

The `<Meta>` component also contains the necessary tags for both Facebook and Twitter.

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

## ⚛ Atomic Design

To quote [Brad Frost's](https://bradfrost.com/) "[Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)".

> In the natural world, atomic elements combine together to form molecules. These molecules can combine further to form relatively complex organisms.

**Atoms**

Serve as the foundational building blocks that comprise all our user interfaces. These include basic HTML elements like form labels, inputs, buttons, and others **_that can’t be broken down any further without ceasing to be functional_**.

**Molecules**

Are relatively simple **_groups of UI elements functioning together as a unit_**. For example, a form label, search input, and button can join together to create a search form molecule.

**Organisms**

Are relatively **_complex UI components composed of groups of molecules and/or atoms and/or other organisms_**. These organisms form distinct sections of an interface.

**Templates**

Are page-level objects that **_place components into a layout and articulate the design’s underlying content structure-- rather than the final content._**

**Pages**

Are specific instances of templates **_that show what a UI looks like with real content in place_**.

**Component organization:**

```
/components
├── /atoms
│   ├── Button.stories.js
│   ├── Button.js
│   ├── Input.stories.js
│   ├── Input.js
│   ├── Label.stories.js
│   └── Label.js
├── /molecules
│   ├── Logo.stories.js
│   ├── Logo.js
│   ├── Navigation.stories.js
│   ├── Navigation.js
│   ├── SearchForm.stories.js
│   └── SearchForm.js
├── /organisms
│   ├── Header.stories.js
│   └── Header.js
├── /templates
│   ├── Homepage.stories.js
│   └── Homepage.js
/pages
├── index.js
├── about.js
```

---

The Atomic Design System all comes together and is cataloged in Storybook:

![screenshot of storybook](https://dl.dropbox.com/s/eidco5h8zlxpbea/Screen%20Shot%202020-09-07%20at%203.47.26%20PM.png?dl=0)

## 📚 Storybook

[View this starter's Storybook](https://main--5f4fb61efe7d0c0022b750b7.chromatic.com).

### About

This starter comes bundled with [Storybook](https://storybook.js.org/). Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app.

Since Storybook v6, you can use both [Component Story Format](https://storybook.js.org/docs/react/api/csf) (CSF) v1 and the new v2 format for writing component examples [using args](https://storybook.js.org/docs/react/writing-stories/args).

Storybook v6 ships by default with a set of [essential addons](https://storybook.js.org/docs/react/essentials/introduction) that add to the initial user experience:

- [Actions](https://storybook.js.org/docs/react/essentials/actions)
- [Backgrounds](https://storybook.js.org/docs/react/essentials/backgrounds)
- [Controls](https://storybook.js.org/docs/react/essentials/controls)
- [Docs](https://storybook.js.org/docs/react/writing-docs/docs-page)
- [Toolbars & Globals](https://storybook.js.org/docs/react/essentials/toolbars-and-globals)
- [Viewport](https://storybook.js.org/docs/react/essentials/viewport)

In addition to the "essentials", I've also included both the [accessibility](https://github.com/storybookjs/storybook/tree/master/addons/a11y) and [links](https://github.com/storybookjs/storybook/tree/master/addons/links) addons.

Learn more by reading the [official docs](https://storybook.js.org/docs/react/get-started/introduction), and learn first hand by taking the [Learn Storybook course](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/).

### Configuration

The `.storybook` folder is where configuration files are placed. There are two files:

`main.ts` is Storybook's primary configuration file:

```js
// .storybook/main.ts
module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links'
  ]
}
```

`preview.js` provides additional configuration when previewing components inside Storybook:

```js
// .storybook/preview.ts
import '../styles/index.css'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'}
}
```

The config above will import the starter's CSS, so components will look like the front-end.

### Stories

Storybook is flexible, and you can configure it to search in any directory for stories. You'll often see them placed in a `/stories` directory. I've chosen to keep stories with their components, for example:

```
/components
├── /molecules
│   ├── Alerts.js
│   ├── Alerts.stories.js
│   ├── Hero.js
│   └── Hero.stories.js
```

In my experience, it's harder to forget to write or update a story-- if it's located next to the component. If you want to move your stories to their own directory, make sure you update `main.ts`.

Learn more about [writing stories](https://storybook.js.org/docs/react/get-started/whats-a-story).

## ♻️ Chromatic (optional)

[View this starter on Chromatic](https://www.chromatic.com/library?appId=5f4fb61efe7d0c0022b750b7&branch=main).

### About

[Chromatic](https://www.chromatic.com) is a free, cloud-based tool-chain (made by the Storybook maintainers), which helps teams ship UI components faster. It comes with a powerful suite of testing tools including:

- Visual Regression Testing
- Collaborative UI Review
- Git Hosting Integration
- Continuous Integration Workflows

Learn more about publishing to Chromatic by reading the [official docs](https://www.learnstorybook.com/design-systems-for-developers/react/en/review/) or watching [this 3-minute video](https://youtu.be/9o6uB1X-LZ8).

### Configuration

This starter is configured with a Github Action workflow, which instructs Chromatic to run a full set of tests anytime there's a push to Github. The config file is located in `.github/workflows/chromatic.yml`:

```yml
name: 'Chromatic Deployment'
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - run: yarn
      - uses: chromaui/action@v1
        with:
          projectToken: YOUR_TOKEN
          token: ${{ secrets.GITHUB_TOKEN }}
```

To use Chromatic on your project, [sign up for a free account](https://www.chromatic.com/start) and replace `projectToken` with your own.

---

## :octocat: Contributing

I would love feedback contributions via Github [Issues](https://github.com/gregrickaby/nextjs-starter/issues) and [Pull Requests](https://github.com/gregrickaby/nextjs-starter/pulls). 🍻

## 🙌🏻 Credits & License

The exploding head illustration is by Maria Shukshina (from <a href="https://icons8.com/">Icons8</a>). This starter is licensed under the [GPL](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).
