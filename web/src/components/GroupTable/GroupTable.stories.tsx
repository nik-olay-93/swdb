// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GroupTable> = (args) => {
//   return <GroupTable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GroupTable from './GroupTable'

export const generated = () => {
  return <GroupTable />
}

export default {
  title: 'Components/GroupTable',
  component: GroupTable,
} as ComponentMeta<typeof GroupTable>
