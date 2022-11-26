import { FindStudentInfoQuery } from 'types/graphql'

export interface StudentLRsProps {
  student: FindStudentInfoQuery['student']
}

const StudentLRs = ({ student }: StudentLRsProps) => {
  const maxWeek = student.group.course.subjects.reduce(
    (max, subject) => Math.max(max, subject.LaboratoryWorks.length),
    0
  )

  return (
    <table className="border-separate border-spacing-0 rounded-md">
      <thead>
        <tr className="bg-blue-200">
          <th className="rounded-tl-md border-r border-gray-500"></th>
          {Array.from({ length: maxWeek }, (_, i) => i + 1).map((week) => (
            <th
              className="w-10 border-r border-gray-500 p-2 text-lg font-semibold last:rounded-tr-md last:border-none"
              key={week}
            >
              {week}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {student.group.course.subjects.map((subject) => (
          <tr key={subject.id} className="even:bg-gray-100">
            <td className="border-r border-gray-500 p-2">{subject.name}</td>
            {subject.LaboratoryWorks.map((laboratoryWork) => {
              const grade = student.LaboratoryWorkGrade.find(
                (lg) => lg.lrId === laboratoryWork.id
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
                  key={laboratoryWork.id}
                  className="w-10 border-r border-gray-500 last:border-none"
                >
                  <div className="flex flex-col items-center text-sm">
                    {grade && <img src={img} alt={img} />}
                  </div>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentLRs
