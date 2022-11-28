import { FindSubjectInfoQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

export interface SubjectSemsProps {
  students: FindSubjectInfoQuery['groupInfo']['students']
  subject: FindSubjectInfoQuery['subjectInfo']
}

const SubjectSems = ({ students, subject }: SubjectSemsProps) => {
  return (
    <table className="border-separate border-spacing-0 rounded-md">
      <thead>
        <tr className="bg-blue-200">
          <th className="rounded-tl-md border-r border-gray-500 p-2">№</th>
          <th className="border-r border-gray-500 p-2">ФИО</th>
          {subject.seminars.map((sem) => (
            <th
              key={sem.id}
              className="border-r border-gray-500 p-2 last:rounded-tr-md last:border-none"
            >
              <span>{sem.name}</span>
              <span>{sem.description}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => {
          return (
            <tr key={student.id} className="even:bg-gray-100">
              <td className="border-r border-gray-500 p-2 text-right">
                {index + 1}
              </td>
              <td className="border-r border-gray-500 p-2">
                <Link to={routes.student({ id: student.id })}>
                  {student.surname} {student.name.substring(0, 1)}.{' '}
                  {student.middlename.substring(0, 1)}.
                </Link>
              </td>
              {subject.seminars.map((sem) => {
                const grade = student.SemGrade.find(
                  (grade) => grade.seminarId == sem.id
                )?.grade

                let img

                switch (grade) {
                  case 'Attended':
                    img = '/tasks/task_issued_2.gif'
                    break
                  case 'Worked':
                    img = '/tasks/task_collected_2.gif'
                    break
                  default:
                    break
                }

                return (
                  <td
                    key={sem.id}
                    className="border-r border-gray-500 p-2 last:border-none"
                  >
                    {img && (
                      <div className="flex-rol flex items-center justify-center">
                        <img src={img} alt={sem.name} />
                      </div>
                    )}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SubjectSems
