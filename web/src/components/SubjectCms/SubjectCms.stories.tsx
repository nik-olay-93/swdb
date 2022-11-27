// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SubjectCms> = (args) => {
//   return <SubjectCms {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SubjectCms from './SubjectCms'

export const generated = () => {
  return <SubjectCms />
}

export default {
  title: 'Components/SubjectCms',
  component: SubjectCms,
} as ComponentMeta<typeof SubjectCms>
