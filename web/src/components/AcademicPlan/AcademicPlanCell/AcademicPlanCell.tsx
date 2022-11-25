import type { FindAcademicPlanById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AcademicPlan from 'src/components/AcademicPlan/AcademicPlan'

export const QUERY = gql`
  query FindAcademicPlanById($id: String!) {
    academicPlan: academicPlan(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AcademicPlan not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ academicPlan }: CellSuccessProps<FindAcademicPlanById>) => {
  return <AcademicPlan academicPlan={academicPlan} />
}
