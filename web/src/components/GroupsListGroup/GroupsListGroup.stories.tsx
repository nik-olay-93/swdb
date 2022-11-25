// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GroupsListGroup> = (args) => {
//   return <GroupsListGroup {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GroupsListGroup from './GroupsListGroup'

export const generated = () => {
  return <GroupsListGroup />
}

export default {
  title: 'Components/GroupsListGroup',
  component: GroupsListGroup,
} as ComponentMeta<typeof GroupsListGroup>
