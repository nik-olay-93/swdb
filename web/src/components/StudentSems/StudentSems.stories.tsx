// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StudentSems> = (args) => {
//   return <StudentSems {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StudentSems from './StudentSems'

export const generated = () => {
  return <StudentSems />
}

export default {
  title: 'Components/StudentSems',
  component: StudentSems,
} as ComponentMeta<typeof StudentSems>
