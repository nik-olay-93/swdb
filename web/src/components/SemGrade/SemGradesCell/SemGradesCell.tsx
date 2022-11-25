import type { FindSemGrades } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SemGrades from 'src/components/SemGrade/SemGrades'

export const QUERY = gql`
  query FindSemGrades {
    semGrades {
      id
      grade
      studentId
      seminarId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No semGrades yet. '}
      <Link
        to={routes.newSemGrade()}
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

export const Success = ({ semGrades }: CellSuccessProps<FindSemGrades>) => {
  return <SemGrades semGrades={semGrades} />
}
