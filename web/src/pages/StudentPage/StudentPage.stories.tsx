import type { ComponentMeta } from '@storybook/react'

import StudentPage from './StudentPage'

export const generated = () => {
  return <StudentPage />
}

export default {
  title: 'Pages/StudentPage',
  component: StudentPage,
} as ComponentMeta<typeof StudentPage>
