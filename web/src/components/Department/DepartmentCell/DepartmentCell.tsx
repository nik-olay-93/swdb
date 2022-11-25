import type { FindDepartmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Department from 'src/components/Department/Department'

export const QUERY = gql`
  query FindDepartmentById($id: String!) {
    department: department(id: $id) {
      id
      name
      description
      facultyId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Department not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ department }: CellSuccessProps<FindDepartmentById>) => {
  return <Department department={department} />
}
