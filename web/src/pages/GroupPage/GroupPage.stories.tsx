import type { ComponentMeta } from '@storybook/react'

import GroupPage from './GroupPage'

export const generated = () => {
  return <GroupPage />
}

export default {
  title: 'Pages/GroupPage',
  component: GroupPage,
} as ComponentMeta<typeof GroupPage>
