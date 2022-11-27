// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SubjectModulesInfo> = (args) => {
//   return <SubjectModulesInfo {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SubjectModulesInfo from './SubjectModulesInfo'

export const generated = () => {
  return <SubjectModulesInfo />
}

export default {
  title: 'Components/SubjectModulesInfo',
  component: SubjectModulesInfo,
} as ComponentMeta<typeof SubjectModulesInfo>
