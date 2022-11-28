// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SubjectSems> = (args) => {
//   return <SubjectSems {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SubjectSems from './SubjectSems'

export const generated = () => {
  return <SubjectSems />
}

export default {
  title: 'Components/SubjectSems',
  component: SubjectSems,
} as ComponentMeta<typeof SubjectSems>
