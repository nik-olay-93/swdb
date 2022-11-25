import type { FindSeminars } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Seminars from 'src/components/Seminar/Seminars'

export const QUERY = gql`
  query FindSeminars {
    seminars {
      id
      name
      week
      createdAt
      updatedAt
      subjectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No seminars yet. '}
      <Link
        to={routes.newSeminar()}
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

export const Success = ({ seminars }: CellSuccessProps<FindSeminars>) => {
  return <Seminars seminars={seminars} />
}
