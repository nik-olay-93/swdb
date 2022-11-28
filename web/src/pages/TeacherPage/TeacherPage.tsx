import { MetaTags } from '@redwoodjs/web'

import TeacherCell from 'src/components/TeacherCell'

const TeacherPage = () => {
  return (
    <>
      <MetaTags title="Teacher" description="Teacher page" />

      <TeacherCell />
    </>
  )
}

export default TeacherPage
