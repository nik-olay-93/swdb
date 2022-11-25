import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ControlWorkGradeForm from 'src/components/ControlWorkGrade/ControlWorkGradeForm'

import type { CreateControlWorkGradeInput } from 'types/graphql'

const CREATE_CONTROL_WORK_GRADE_MUTATION = gql`
  mutation CreateControlWorkGradeMutation($input: CreateControlWorkGradeInput!) {
    createControlWorkGrade(input: $input) {
      id
    }
  }
`

const NewControlWorkGrade = () => {
  const [createControlWorkGrade, { loading, error }] = useMutation(
    CREATE_CONTROL_WORK_GRADE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ControlWorkGrade created')
        navigate(routes.controlWorkGrades())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateControlWorkGradeInput) => {
    createControlWorkGrade({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ControlWorkGrade</h2>
      </header>
      <div className="rw-segment-main">
        <ControlWorkGradeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewControlWorkGrade
