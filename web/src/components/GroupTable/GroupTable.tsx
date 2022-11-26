import type { FindGroupQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

export interface GroupTableProps {
  group: FindGroupQuery['group']
}

const GroupTable = ({ group }: GroupTableProps) => {
  return (
    <table className="mb-auto table-auto border-separate border-spacing-0 rounded-md border-2 bg-gray-200">
      <thead>
        <tr>
          <th className="p-2 align-bottom">ФИО</th>
          {group.course.subjects.map((subject) => (
            <th
              style={{
                writingMode: 'vertical-lr',
              }}
              className="rotate-180 p-2 text-left"
              key={subject.id}
            >
              {subject.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {group.students.map((student) => (
          <tr key={student.id} className="odd:bg-gray-100">
            <td className="p-2">
              <Link to={routes.student({ id: student.id })}>
                {student.surname} {student.name.substring(0, 1)}.{' '}
                {student.middlename.substring(0, 1)}.
              </Link>
            </td>
            {group.course.subjects.map((s) => {
              const _sum = student.ModuleGrade.filter((mg) =>
                s.modules.some((m) => m.id === mg.moduleId)
              ).reduce((sum, mg) => sum + mg.grade, 0)
              return (
                <td
                  className={`p-2 text-right ${
                    _sum > s.goodGrade
                      ? 'text-green-600'
                      : _sum > s.okGrade
                      ? 'text-green-400'
                      : _sum > s.minGrade
                      ? 'text-orange-400'
                      : 'text-red-400'
                  }`}
                  key={s.id}
                >
                  {_sum}
                </td>
              )
            })}
            <td className="p-2 text-right">
              {student.ModuleGrade.reduce((sum, mg) => sum + mg.grade, 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GroupTable
