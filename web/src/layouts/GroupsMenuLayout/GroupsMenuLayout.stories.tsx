import type { ComponentMeta, ComponentStory } from '@storybook/react'

import GroupsMenuLayout from './GroupsMenuLayout'

export const generated: ComponentStory<typeof GroupsMenuLayout> = (args) => {
  return <GroupsMenuLayout {...args} />
}

export default {
  title: 'Layouts/GroupsMenuLayout',
  component: GroupsMenuLayout,
} as ComponentMeta<typeof GroupsMenuLayout>
