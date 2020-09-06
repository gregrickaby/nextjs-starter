import React from 'react'
import Button from './index'

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
  title: 'Design System/Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'The default button.'
      }
    }
  }
}

const Template = (args: Record<string, unknown>) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  text: 'Learn More',
  url: '/#'
}