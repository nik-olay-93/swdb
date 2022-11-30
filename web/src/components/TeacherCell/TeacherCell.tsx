import { MySubjectsQuery, MySubjectsQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
      <span>{JSON.stringify(subjects)}</span>
      <span>{JSON.stringify(groups)}</span>
    </div>
  )
}
