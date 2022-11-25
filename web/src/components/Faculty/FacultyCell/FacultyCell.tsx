import type { FindFacultyById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Faculty from 'src/components/Faculty/Faculty'

export const QUERY = gql`
  query FindFacultyById($id: String!) {
    faculty: faculty(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Faculty not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ faculty }: CellSuccessProps<FindFacultyById>) => {
  return <Faculty faculty={faculty} />
}
