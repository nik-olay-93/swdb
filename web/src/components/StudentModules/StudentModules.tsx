import { FindStudentInfoQuery } from 'types/graphql'

export interface StudentModulesProps {
  student: FindStudentInfoQuery['student']
}

const StudentModules = ({ student }: StudentModulesProps) => {
  const maxWeek = student.group.course.subjects.reduce(
    (max, subject) =>
      Math.max(
        max,
        subject.modules.reduce((max, module) => Math.max(max, module.week), 0)
      ),
    0
  )

  return (
    <table className="border-separate border-spacing-0 rounded-md">
      <thead>
        <tr className="bg-blue-200">
          <th className="rounded-tl-md border-r border-gray-500"></th>
          {Array.from({ length: maxWeek }, (_, i) => i + 1).map((week) => (
            <th
              className="w-10 border-r border-gray-500 p-2 text-lg font-semibold"
              key={week}
            >
              {week}
            </th>
          ))}
          <th className="rounded-tr-md p-2">Сумма</th>
        </tr>
      </thead>
      <tbody>
        {student.group.course.subjects.map((subject) => (
          <tr key={subject.id} className="even:bg-gray-100">
            <td className="border-r border-gray-500 p-2">{subject.name}</td>
            {Array.from({ length: maxWeek }, (_, i) => i + 1).map((week) => {
              const module = subject.modules.find(
                (module) => module.week === week
              )

              const grade = student.ModuleGrade.find(
                (mg) => mg.moduleId === module?.id
              )?.grade

              return (
                <td
                  key={week}
                  className="border-r border-gray-500 last:border-none"
                >
                  <div className="flex flex-col items-center text-sm">
                    {grade && (
                      <span
                        className={`${
                          grade > module.goodGrade
                            ? 'text-green-600'
                            : grade > module.okGrade
                            ? 'text-green-400'
                            : grade > module.minGrade
                            ? 'text-yellow-400'
                            : 'text-red-500'
                        }`}
                      >
                        {grade}
                      </span>
                    )}
                    {module && <span>{module.name}</span>}
                  </div>
                </td>
              )
            })}
            <td className="text-center">
              {student.ModuleGrade.filter((mg) =>
                subject.modules.some((m) => m.id === mg.moduleId)
              ).reduce((sum, mg) => sum + mg.grade, 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentModules
