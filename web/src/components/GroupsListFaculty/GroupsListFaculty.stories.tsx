// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GroupsListFaculty> = (args) => {
//   return <GroupsListFaculty {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GroupsListFaculty from './GroupsListFaculty'

export const generated = () => {
  return <GroupsListFaculty />
}

export default {
  title: 'Components/GroupsListFaculty',
  component: GroupsListFaculty,
} as ComponentMeta<typeof GroupsListFaculty>
