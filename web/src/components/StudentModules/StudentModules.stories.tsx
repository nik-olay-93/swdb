// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StudentModules> = (args) => {
//   return <StudentModules {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StudentModules from './StudentModules'

export const generated = () => {
  return <StudentModules />
}

export default {
  title: 'Components/StudentModules',
  component: StudentModules,
} as ComponentMeta<typeof StudentModules>
