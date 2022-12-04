import { MetaTags } from '@redwoodjs/web'

interface Props {
  groupId: string
  subjectId: string
}

const TeacherGroupPage = ({ groupId, subjectId }: Props) => {
  return (
    <>
      <MetaTags title="Teacher Group" description="Teacher group page" />
      {groupId} {subjectId}
    </>
  )
}

export default TeacherGroupPage
