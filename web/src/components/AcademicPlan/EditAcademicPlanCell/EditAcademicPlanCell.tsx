import type { EditAcademicPlanById, UpdateAcademicPlanInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AcademicPlanForm from 'src/components/AcademicPlan/AcademicPlanForm'

export const QUERY = gql`
  query EditAcademicPlanById($id: String!) {
    academicPlan: academicPlan(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`
const UPDATE_ACADEMIC_PLAN_MUTATION = gql`
  mutation UpdateAcademicPlanMutation($id: String!, $input: UpdateAcademicPlanInput!) {
    updateAcademicPlan(id: $id, input: $input) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ academicPlan }: CellSuccessProps<EditAcademicPlanById>) => {
  const [updateAcademicPlan, { loading, error }] = useMutation(
    UPDATE_ACADEMIC_PLAN_MUTATION,
    {
      onCompleted: () => {
        toast.success('AcademicPlan updated')
        navigate(routes.academicPlans())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAcademicPlanInput,
    id: EditAcademicPlanById['academicPlan']['id']
  ) => {
    updateAcademicPlan({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit AcademicPlan {academicPlan?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <AcademicPlanForm academicPlan={academicPlan} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
