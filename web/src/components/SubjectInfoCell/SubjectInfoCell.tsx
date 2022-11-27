import type {
  FindSubjectInfoQuery,
  FindSubjectInfoQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SubjectModules from '../SubjectModulesInfo/SubjectModulesInfo'

export const QUERY = gql`
  query FindSubjectInfoQuery($subjectId: String!, $groupId: String!) {
    subjectInfo: subject(id: $subjectId) {
      id
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
      }
      ControlWorks {
        id
        name
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
    <div>
      <h2 className="mb-2 text-3xl font-bold">Модули</h2>
      <SubjectModules students={groupInfo.students} subject={subjectInfo} />
    </div>
  )
}