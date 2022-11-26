import { MetaTags } from '@redwoodjs/web'

import GroupCell from 'src/components/GroupCell'

interface Props {
  id: string
}

const GroupPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Группа" description="Group page" />

      <GroupCell id={id} />
    </>
  )
}

export default GroupPage
