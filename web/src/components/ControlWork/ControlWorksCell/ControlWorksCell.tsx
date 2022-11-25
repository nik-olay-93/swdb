import type { FindControlWorks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ControlWorks from 'src/components/ControlWork/ControlWorks'

export const QUERY = gql`
  query FindControlWorks {
    controlWorks {
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
      {'No controlWorks yet. '}
      <Link
        to={routes.newControlWork()}
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

export const Success = ({ controlWorks }: CellSuccessProps<FindControlWorks>) => {
  return <ControlWorks controlWorks={controlWorks} />
}
