import { FindSubjectInfoQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

export interface SubjectLRsProps {
  students: FindSubjectInfoQuery['groupInfo']['students']
  subject: FindSubjectInfoQuery['subjectInfo']
}

const SubjectLRs = ({ students, subject }: SubjectLRsProps) => {
  return (
    <table className="border-separate border-spacing-0 rounded-md">
      <thead>
        <tr className="bg-blue-200">
          <th className="rounded-tl-md border-r border-gray-500 p-2">№</th>
          <th className="border-r border-gray-500 p-2">ФИО</th>
          {subject.LaboratoryWorks.map((lw) => (
            <th
              key={lw.id}
              className="border-r border-gray-500 p-2 last:rounded-tr-md last:border-none"
            >
              <span>{lw.name}</span>
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
              {subject.LaboratoryWorks.map((lw) => {
                const grade = student.LaboratoryWorkGrade.find(
                  (grade) => grade.lrId === lw.id
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
                    key={lw.id}
                    className="border-r border-gray-500 p-2 last:border-none"
                  >
                    {img && (
                      <div className="flex-rol flex items-center justify-center">
                        <img src={img} alt={lw.name} />
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

export default SubjectLRs
