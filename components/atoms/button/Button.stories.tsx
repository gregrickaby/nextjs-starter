import React from 'react'
import Button from './Button'

/**
 * The following is a story.
 *
 * It follows the "Component Story Format" (CSF), an open standard
 * based on ES6 modules which is portable beyond Storybook. This is
 * version 2 of that standard and uses args.
 *
 * @see https://storybook.js.org/docs/react/api/csf
 * @see https://storybook.js.org/docs/react/writing-stories/introduction
 * @see https://medium.com/storybookjs/introducing-storybook-args-2dadcdb777cc
 */

export default {
  title: 'Components/Atoms/Button',
  component: Button
}

const Template = (args: Record<string, unknown>) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  text: 'Learn More',
  url: '/#'
}
