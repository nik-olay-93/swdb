import type { FindControlWorkGrades } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ControlWorkGrades from 'src/components/ControlWorkGrade/ControlWorkGrades'

export const QUERY = gql`
  query FindControlWorkGrades {
    controlWorkGrades {
      id
      grade
      studentId
      cmId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No controlWorkGrades yet. '}
      <Link
        to={routes.newControlWorkGrade()}
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

export const Success = ({ controlWorkGrades }: CellSuccessProps<FindControlWorkGrades>) => {
  return <ControlWorkGrades controlWorkGrades={controlWorkGrades} />
}
