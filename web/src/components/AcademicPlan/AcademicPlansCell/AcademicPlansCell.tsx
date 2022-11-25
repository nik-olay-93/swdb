import type { FindAcademicPlans } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AcademicPlans from 'src/components/AcademicPlan/AcademicPlans'

export const QUERY = gql`
  query FindAcademicPlans {
    academicPlans {
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
      {'No academicPlans yet. '}
      <Link
        to={routes.newAcademicPlan()}
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

export const Success = ({ academicPlans }: CellSuccessProps<FindAcademicPlans>) => {
  return <AcademicPlans academicPlans={academicPlans} />
}
