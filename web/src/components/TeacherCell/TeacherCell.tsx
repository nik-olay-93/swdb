import { MySubjectsQuery, MySubjectsQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeacherList from '../TeacherList/TeacherList'

export const QUERY = gql`
  query MySubjectsQuery {
    subjects: mySubjects {
      id
      name
    }
    groups: myGroups {
      id
      name
      department {
        id
        name
        faculty {
          id
          name
        }
      }
      course {
        id
        name
        subjects {
          id
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<MySubjectsQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  subjects,
  groups,
}: CellSuccessProps<MySubjectsQuery, MySubjectsQueryVariables>) => {
  return (
    <div>
      <TeacherList groups={groups} subjects={subjects} />
    </div>
  )
}
