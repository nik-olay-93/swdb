// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StudentLRs> = (args) => {
//   return <StudentLRs {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StudentLRs from './StudentLRs'

export const generated = () => {
  return <StudentLRs />
}

export default {
  title: 'Components/StudentLRs',
  component: StudentLRs,
} as ComponentMeta<typeof StudentLRs>
