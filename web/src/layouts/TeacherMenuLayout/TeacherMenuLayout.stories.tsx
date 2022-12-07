import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TeacherMenuLayout from './TeacherMenuLayout'

export const generated: ComponentStory<typeof TeacherMenuLayout> = (args) => {
  return <TeacherMenuLayout {...args} />
}

export default {
  title: 'Layouts/TeacherMenuLayout',
  component: TeacherMenuLayout,
} as ComponentMeta<typeof TeacherMenuLayout>
