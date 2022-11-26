import { FindStudentInfoQuery } from 'types/graphql'

export interface StudentSemsProps {
  student: FindStudentInfoQuery['student']
}

const StudentSems = ({ student }: StudentSemsProps) => {
  const maxWeek = student.group.course.subjects.reduce(
    (max, subject) => Math.max(max, subject.seminars.length),
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
            {subject.seminars.map((seminar) => {
              const grade = student.SemGrade.find(
                (cg) => cg.seminarId === seminar.id
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
                  key={seminar.id}
                  className="border-r border-gray-500 last:border-none"
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

export default StudentSems
