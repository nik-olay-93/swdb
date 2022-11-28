import type { ComponentMeta, ComponentStory } from '@storybook/react'

import NavBarLayout from './NavBarLayout'

export const generated: ComponentStory<typeof NavBarLayout> = (args) => {
  return <NavBarLayout {...args} />
}

export default {
  title: 'Layouts/NavBarLayout',
  component: NavBarLayout,
} as ComponentMeta<typeof NavBarLayout>
