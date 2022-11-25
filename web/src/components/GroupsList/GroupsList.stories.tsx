// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GroupsList> = (args) => {
//   return <GroupsList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GroupsList from './GroupsList'

export const generated = () => {
  return <GroupsList />
}

export default {
  title: 'Components/GroupsList',
  component: GroupsList,
} as ComponentMeta<typeof GroupsList>
