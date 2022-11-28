import { FindSubjectInfoQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

export interface SubjectCMsProps {
  students: FindSubjectInfoQuery['groupInfo']['students']
  subject: FindSubjectInfoQuery['subjectInfo']
}

const SubjectCMs = ({ students, subject }: SubjectCMsProps) => {
  return (
    <table className="border-separate border-spacing-0 rounded-md">
      <thead>
        <tr className="bg-blue-200">
          <th className="rounded-tl-md border-r border-gray-500 p-2">№</th>
          <th className="border-r border-gray-500 p-2">ФИО</th>
          {subject.ControlWorks.map((cw) => (
            <th
              key={cw.id}
              className="border-r border-gray-500 p-2 last:rounded-tr-md last:border-none"
            >
              <div className="flex flex-col">
                <span>{cw.name}</span>
                <span className="text-sm font-normal">{cw.week}-я неделя</span>
              </div>
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
              {subject.ControlWorks.map((cw) => {
                const grade = student.ControlWorkGrade.find(
                  (grade) => grade.cmId === cw.id
                )?.grade

                let img

                switch (grade) {
                  case 'Issued':
                    img = '/tasks/task_issued.gif'
                    break
                  case 'Done':
                    img = '/tasks/task_collected.gif'
                    break
                  case 'Asserted':
                    img = '/tasks/task_approved.gif'
                    break
                  case 'AssertedBehind':
                    img = '/tasks/task_approved_after.gif'
                    break
                  case 'AssertedAhead':
                    img = '/tasks/task_approved_before.gif'
                    break
                  default:
                    break
                }
                return (
                  <td
                    key={cw.id}
                    className="border-r border-gray-500 p-2 last:border-none"
                  >
                    {img && (
                      <div className="flex-rol flex items-center justify-center">
                        <img src={img} alt={cw.name} />
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

export default SubjectCMs
