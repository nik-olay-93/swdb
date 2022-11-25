import { MetaTags } from '@redwoodjs/web'

interface Props {
  id: string
}

const GroupPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Group" description="Group page" />

      <span>Group {id}</span>
    </>
  )
}

export default GroupPage
