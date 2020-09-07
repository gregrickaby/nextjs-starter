import React from 'react'
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
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'A text-based &lt;input&gt; element.'
      }
    }
  }
}

// @ts-ignore
const Template = (args: Record<string, unknown>) => <Input {...args} />

export const Text = Template.bind({})

Text.args = {
  type: 'text',
  placeholder: 'Your Name...'
}

export const Email = Template.bind({})

Email.args = {
  type: 'email',
  placeholder: 'janedoe@email.com'
}

export const Password = Template.bind({})

Password.args = {
  type: 'password',
  placeholder: 'Enter your password...'
}

export const Search = Template.bind({})

Search.args = {
  type: 'search',
  placeholder: 'Search...'
}

export const Url = Template.bind({})

Url.args = {
  type: 'url',
  placeholder: 'Enter your website address...'
}
