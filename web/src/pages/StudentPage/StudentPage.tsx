import { MetaTags } from '@redwoodjs/web'

import StudentInfoCell from 'src/components/StudentInfoCell'

interface Props {
  id: string
}

const StudentPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Студент" description="Student page" />

      <StudentInfoCell id={id} />
    </>
  )
}

export default StudentPage
