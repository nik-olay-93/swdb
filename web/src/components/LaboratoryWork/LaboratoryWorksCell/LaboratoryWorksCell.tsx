import type { FindLaboratoryWorks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import LaboratoryWorks from 'src/components/LaboratoryWork/LaboratoryWorks'

export const QUERY = gql`
  query FindLaboratoryWorks {
    laboratoryWorks {
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
      {'No laboratoryWorks yet. '}
      <Link
        to={routes.newLaboratoryWork()}
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

export const Success = ({ laboratoryWorks }: CellSuccessProps<FindLaboratoryWorks>) => {
  return <LaboratoryWorks laboratoryWorks={laboratoryWorks} />
}
