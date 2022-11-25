import type { FindFaculties } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Faculties from 'src/components/Faculty/Faculties'

export const QUERY = gql`
  query FindFaculties {
    faculties {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No faculties yet. '}
      <Link
        to={routes.newFaculty()}
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

export const Success = ({ faculties }: CellSuccessProps<FindFaculties>) => {
  return <Faculties faculties={faculties} />
}
