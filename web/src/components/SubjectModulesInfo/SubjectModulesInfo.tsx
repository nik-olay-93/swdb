import { FindSubjectInfoQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

export interface SubjectModulesProps {
  students: FindSubjectInfoQuery['groupInfo']['students']
  subject: FindSubjectInfoQuery['subjectInfo']
}

const SubjectModules = ({ students, subject }: SubjectModulesProps) => {
  return (
    <table className="border-separate border-spacing-0 rounded-md">
      <thead>
        <tr className="bg-blue-200">
          <th className="rounded-tl-md border-r border-gray-500 p-2">№</th>
          <th className="border-r border-gray-500 p-2">ФИО</th>
          {subject.modules.map((module) => (
            <th key={module.id} className="border-r border-gray-500">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <span className="bg-red-400 py-1 pl-2 text-right font-semibold">
                    {module.minGrade}
                  </span>
                  <span className="bg-yellow-400 py-1 pl-2 text-right font-semibold">
                    {module.okGrade}
                  </span>
                  <span className="bg-green-400 py-1 pl-2 text-right font-semibold">
                    {module.goodGrade}
                  </span>
                  <span className="bg-green-600 py-1 pl-2 text-right font-semibold">
                    {module.maxGrade}
                  </span>
                </div>
                <span>{module.name}</span>
                <span>{module.week}-я неделя</span>
              </div>
            </th>
          ))}
          <th className="rounded-tr-md p-2">Сумма</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => {
          const sum = student.ModuleGrade.filter((mg) =>
            subject.modules.some((m) => m.id === mg.moduleId)
          ).reduce((sum, mg) => sum + mg.grade, 0)
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
              {subject.modules.map((module) => {
                const grade: number | undefined = student.ModuleGrade.find(
                  (grade) => grade.moduleId === module.id
                )?.grade
                return (
                  <td
                    key={module.id}
                    className={`border-r border-gray-500 p-2 text-center ${
                      grade > module.goodGrade
                        ? 'text-green-600'
                        : grade > module.okGrade
                        ? 'text-green-400'
                        : grade > module.minGrade
                        ? 'text-yellow-400'
                        : 'text-red-400'
                    }`}
                  >
                    {grade}
                  </td>
                )
              })}
              <td
                className={`p-2 text-center ${
                  sum > 84
                    ? 'text-green-600'
                    : sum > 70
                    ? 'text-green-400'
                    : sum > 59
                    ? 'text-yellow-400'
                    : 'text-red-400'
                }`}
              >
                {sum}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SubjectModules
