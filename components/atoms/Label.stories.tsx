import React from 'react'
import Label from './Label'
import Input from './Input'

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
  title: 'Design System/Atoms/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'A &lt;label&gt; element.'
      }
    }
  }
}

// @ts-ignore
const Template = (args: Record<string, unknown>) => (
  <Label {...args}>
    <Input type="text" placeholder="This input field is a placeholder" />
  </Label>
)

export const Default = Template.bind({})

Default.args = {
  text: 'Enter your name:'
}