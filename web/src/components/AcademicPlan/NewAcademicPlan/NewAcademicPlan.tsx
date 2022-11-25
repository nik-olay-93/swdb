import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AcademicPlanForm from 'src/components/AcademicPlan/AcademicPlanForm'

import type { CreateAcademicPlanInput } from 'types/graphql'

const CREATE_ACADEMIC_PLAN_MUTATION = gql`
  mutation CreateAcademicPlanMutation($input: CreateAcademicPlanInput!) {
    createAcademicPlan(input: $input) {
      id
    }
  }
`

const NewAcademicPlan = () => {
  const [createAcademicPlan, { loading, error }] = useMutation(
    CREATE_ACADEMIC_PLAN_MUTATION,
    {
      onCompleted: () => {
        toast.success('AcademicPlan created')
        navigate(routes.academicPlans())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAcademicPlanInput) => {
    createAcademicPlan({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AcademicPlan</h2>
      </header>
      <div className="rw-segment-main">
        <AcademicPlanForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAcademicPlan
