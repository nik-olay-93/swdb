import { useState } from 'react'

import { MySubjectsQuery } from 'types/graphql'

import TeacherListSubject from './TeacherListSubject'

interface Props {
  subjects: MySubjectsQuery['subjects']
  groups: MySubjectsQuery['groups']
}

const TeacherList = ({ groups, subjects }: Props) => {
  const [selectedSubject, setSelectedSubject] = useState<string>(null)

  return (
    <div className="flex flex-col">
      {subjects.map((subject) => (
        <TeacherListSubject
          key={subject.id}
          groups={groups.filter((g) =>
            g.course.subjects.some((s) => s.id === subject.id)
          )}
          subject={subject}
          selected={selectedSubject === subject.id}
          setSelected={() =>
            setSelectedSubject(
              selectedSubject === subject.id ? null : subject.id
            )
          }
        />
      ))}
    </div>
  )
}

export default TeacherList
