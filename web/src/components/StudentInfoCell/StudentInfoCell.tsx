import type {
  FindStudentInfoQuery,
  FindStudentInfoQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StudentCMs from '../StudentCMs/StudentCMs'
import StudentLRs from '../StudentLRs/StudentLRs'
import StudentModules from '../StudentModules/StudentModules'
import StudentSems from '../StudentSems/StudentSems'

export const QUERY = gql`
  query FindStudentInfoQuery($id: String!) {
    student: student(id: $id) {
      id
      name
      surname
      middlename
      tid
      group {
        id
        name
        semester
        course {
          id
          name
          academicPlan {
            id
            name
          }
          subjects {
            id
            name
            minGrade
            okGrade
            goodGrade
            maxGrade
            seminars {
              id
              name
              description
            }
            ControlWorks {
              id
              name
              week
            }
            LaboratoryWorks {
              id
              name
              week
            }
            modules {
              id
              name
              week
              minGrade
              okGrade
              goodGrade
              maxGrade
            }
          }
        }
      }
      ControlWorkGrade {
        id
        grade
        cmId
      }
      LaboratoryWorkGrade {
        id
        grade
        lrId
      }
      SemGrade {
        id
        grade
        seminarId
      }
      ModuleGrade {
        id
        grade
        moduleId
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindStudentInfoQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  student,
}: CellSuccessProps<FindStudentInfoQuery, FindStudentInfoQueryVariables>) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        {student.name} {student.surname}, {student.group.name}
      </h1>
      <h3>
        {student.group.course.academicPlan.name}, {student.group.semester}{' '}
        Семестр
      </h3>
      <h4 className="mt-4 text-lg font-semibold">Модули</h4>
      <StudentModules student={student} />
      <h4 className="mt-4 text-lg font-semibold">Контрольные мероприятия</h4>
      <StudentCMs student={student} />
      <h4 className="mt-4 text-lg font-semibold">Лабораторные работы</h4>
      <StudentLRs student={student} />
      <h4 className="mt-4 text-lg font-semibold">Семинарские занятия</h4>
      <StudentSems student={student} />
    </div>
  )
}
