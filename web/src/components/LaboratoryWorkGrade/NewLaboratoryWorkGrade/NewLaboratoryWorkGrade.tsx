import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LaboratoryWorkGradeForm from 'src/components/LaboratoryWorkGrade/LaboratoryWorkGradeForm'

import type { CreateLaboratoryWorkGradeInput } from 'types/graphql'

const CREATE_LABORATORY_WORK_GRADE_MUTATION = gql`
  mutation CreateLaboratoryWorkGradeMutation($input: CreateLaboratoryWorkGradeInput!) {
    createLaboratoryWorkGrade(input: $input) {
      id
    }
  }
`

const NewLaboratoryWorkGrade = () => {
  const [createLaboratoryWorkGrade, { loading, error }] = useMutation(
    CREATE_LABORATORY_WORK_GRADE_MUTATION,
    {
      onCompleted: () => {
        toast.success('LaboratoryWorkGrade created')
        navigate(routes.laboratoryWorkGrades())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateLaboratoryWorkGradeInput) => {
    createLaboratoryWorkGrade({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New LaboratoryWorkGrade</h2>
      </header>
      <div className="rw-segment-main">
        <LaboratoryWorkGradeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLaboratoryWorkGrade
