import { MetaTags } from '@redwoodjs/web'

import SubjectInfoCell from 'src/components/SubjectInfoCell'

interface Props {
  subjectId: string
  groupId: string
}

const SubjectPage = ({ subjectId, groupId }: Props) => {
  return (
    <>
      <MetaTags title="Subject" description="Subject page" />

      <SubjectInfoCell subjectId={subjectId} groupId={groupId} />
    </>
  )
}

export default SubjectPage
