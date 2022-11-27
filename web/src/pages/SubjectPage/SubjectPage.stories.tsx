import type { ComponentMeta } from '@storybook/react'

import SubjectPage from './SubjectPage'

export const generated = () => {
  return <SubjectPage />
}

export default {
  title: 'Pages/SubjectPage',
  component: SubjectPage,
} as ComponentMeta<typeof SubjectPage>
