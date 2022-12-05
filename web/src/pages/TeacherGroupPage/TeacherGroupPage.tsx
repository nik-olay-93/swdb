import { MetaTags } from '@redwoodjs/web'

import TeachersGroupCell from 'src/components/TeachersGroupCell'

interface Props {
  groupId: string
  subjectId: string
}

const TeacherGroupPage = ({ groupId, subjectId }: Props) => {
  return (
    <>
      <MetaTags title="Teacher Group" description="Teacher group page" />

      <TeachersGroupCell groupId={groupId} subjectId={subjectId} />
    </>
  )
}

export default TeacherGroupPage
