// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StudentCMs> = (args) => {
//   return <StudentCMs {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StudentCMs from './StudentCMs'

export const generated = () => {
  return <StudentCMs />
}

export default {
  title: 'Components/StudentCMs',
  component: StudentCMs,
} as ComponentMeta<typeof StudentCMs>
