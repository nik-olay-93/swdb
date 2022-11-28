import type { ComponentMeta } from '@storybook/react'

import TeacherPage from './TeacherPage'

export const generated = () => {
  return <TeacherPage />
}

export default {
  title: 'Pages/TeacherPage',
  component: TeacherPage,
} as ComponentMeta<typeof TeacherPage>
