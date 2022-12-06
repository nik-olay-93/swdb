import {
  TeacherAssignment,
  TeachersGroupQuery,
  TeachersGroupQueryVariables,
} from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import RefetchContext from 'src/lib/RefetchContext'

import SubjectCMs from '../SubjectCms/SubjectCms'
import SubjectLRs from '../SubjectLrs/SubjectLrs'
import SubjectModules from '../SubjectModulesInfo/SubjectModulesInfo'
import SubjectSems from '../SubjectSems/SubjectSems'

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const QUERY = gql`
  query TeachersGroupQuery($groupId: String!, $subjectId: String!) {
    group: group(id: $groupId) {
      id
      name
      students {
        id
        name
        surname
        middlename
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
    subject: subject(id: $subjectId) {
      id
      name
      modules {
        id
        name
        minGrade
        okGrade
        goodGrade
        maxGrade
        week
      }
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
      }
    }
    assignments: myAssignments {
      id
      groupId
      subjectId
      assignment
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<TeachersGroupQuery>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  group,
  subject,
  assignments,
  refetch,
}: CellSuccessProps<TeachersGroupQuery, TeachersGroupQueryVariables>) => {
  const assignmentsBySubject = assignments.filter(
    (assignment) =>
      assignment.subjectId === subject.id && assignment.groupId === group.id
  )[0].assignment

  const hasAccess = (assignment: TeacherAssignment) =>
    assignmentsBySubject.some((a) => a === assignment)

  return (
    <RefetchContext.Provider value={refetch}>
      <div className="flex flex-grow flex-col items-start gap-2">
        <h1 className="text-3xl font-bold">{group.name}</h1>
        <span className="text-2xl font-semibold">{subject.name}</span>

        {hasAccess('Module') && (
          <>
            <h2 className="text-2xl font-bold">Модули</h2>
            <SubjectModules
              editable
              students={group.students}
              subject={subject}
            />
          </>
        )}

        {hasAccess('ControlWork') && (
          <>
            <h2 className="text-2xl font-bold">Контрольные мероприятия</h2>
            <SubjectCMs students={group.students} subject={subject} />
          </>
        )}

        {hasAccess('LaboratoryWork') && (
          <>
            <h2 className="text-2xl font-bold">Лабораторные работы</h2>
            <SubjectLRs students={group.students} subject={subject} />
          </>
        )}

        {hasAccess('Seminar') && (
          <>
            <h2 className="text-2xl font-bold">Семинарские занятия</h2>
            <SubjectSems students={group.students} subject={subject} />
          </>
        )}
      </div>
    </RefetchContext.Provider>
  )
}
