import type { FindDepartments } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Departments from 'src/components/Department/Departments'

export const QUERY = gql`
  query FindDepartments {
    departments {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No departments yet. '}
      <Link
        to={routes.newDepartment()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ departments }: CellSuccessProps<FindDepartments>) => {
  return <Departments departments={departments} />
}
