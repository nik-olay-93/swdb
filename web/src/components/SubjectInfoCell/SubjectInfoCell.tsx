import type {
  FindSubjectInfoQuery,
  FindSubjectInfoQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SubjectCMs from '../SubjectCms/SubjectCms'
import SubjectLRs from '../SubjectLrs/SubjectLrs'
import SubjectModules from '../SubjectModulesInfo/SubjectModulesInfo'
import SubjectSems from '../SubjectSems/SubjectSems'

export const QUERY = gql`
  query FindSubjectInfoQuery($subjectId: String!, $groupId: String!) {
    subjectInfo: subject(id: $subjectId) {
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
    groupInfo: group(id: $groupId) {
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
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSubjectInfoQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  subjectInfo,
  groupInfo,
}: CellSuccessProps<FindSubjectInfoQuery, FindSubjectInfoQueryVariables>) => {
  return (
    <div className="flex flex-grow flex-col items-start gap-2">
      <h1 className="text-3xl font-bold">{subjectInfo.name}</h1>
      <span className="text-2xl font-semibold">{groupInfo.name}</span>

      <h2 className="text-2xl font-bold">Модули</h2>
      <SubjectModules students={groupInfo.students} subject={subjectInfo} />

      <h2 className="text-2xl font-bold">Контрольные мероприятия</h2>
      <SubjectCMs students={groupInfo.students} subject={subjectInfo} />

      <h2 className="text-2xl font-bold">Лабораторные работы</h2>
      <SubjectLRs students={groupInfo.students} subject={subjectInfo} />

      <h2 className="text-2xl font-bold">Семинарские занятия</h2>
      <SubjectSems students={groupInfo.students} subject={subjectInfo} />
    </div>
  )
}
