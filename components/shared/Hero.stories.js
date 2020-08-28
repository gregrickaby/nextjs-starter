import React from 'react'
import {action} from '@storybook/addon-actions'
import {withKnobs, object} from '@storybook/addon-knobs'
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
  background: {
    backgroundImage:
      'https://i.picsum.photos/id/1059/1280/720.jpg?hmac=3ajpkbtku_zopsq04qdo4zx56f7j3j_esi0aqhxgad8'
  },
  title: 'Next.js Starter',
  description: 'A slightly opinionated, yet still bare-bones Next.js starter.'
}
export const Empty = Template.bind({})
Empty.args = {
  background: {},
  title: '',
  description: ''
}
