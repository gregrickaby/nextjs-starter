import React from 'react'
import {withKnobs} from '@storybook/addon-knobs'
import Hero from './Hero'

/**
 * The following is a story.
 *
 * It follows the "Component Story Format" (CSF), an open standard
 * based on ES6 modules which is portable beyond Storybook.
 *
 * @link https://storybook.js.org/docs/react/api/csf
 * @link https://storybook.js.org/docs/react/writing-stories/introduction
 */

/**
 * Register this story with Storybook app.
 *
 * @link https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 */
export default {
  component: Hero, // The <Component> itself.
  title: 'Hero', // How to refer to the component in the sidebar of the Storybook app.
  decorators: [withKnobs], // Wrap a component in arbitrary markup when rendering a story.
  excludeStories: /.*Data$/ // Exports in the story file that should **not** be rendered as stories.
}

/**
 * Callbacks that appears in the actions panel of the Storybook app when clicked.
 *
 * @link https://storybook.js.org/addons/introduction/#2-native-addons
 */
export const actionsData = {}

// Create a “template” of how args map to rendering.
const Template = (args) => <Hero {...args} {...actionsData} />

// Reuse that template.
export const Default = Template.bind({})
Default.args = {
  background:
    'https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=70',
  title: 'Next.js Starter',
  description: 'A slightly opinionated, yet bare-bones Next.js starter.'
}
export const NoBackground = Template.bind({})
NoBackground.args = {
  background: '',
  title: 'Next.js Starter',
  description: 'A slightly opinionated, yet bare-bones Next.js starter.'
}
