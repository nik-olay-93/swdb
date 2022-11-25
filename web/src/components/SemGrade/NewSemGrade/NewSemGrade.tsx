import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SemGradeForm from 'src/components/SemGrade/SemGradeForm'

import type { CreateSemGradeInput } from 'types/graphql'

const CREATE_SEM_GRADE_MUTATION = gql`
  mutation CreateSemGradeMutation($input: CreateSemGradeInput!) {
    createSemGrade(input: $input) {
      id
    }
  }
`

const NewSemGrade = () => {
  const [createSemGrade, { loading, error }] = useMutation(
    CREATE_SEM_GRADE_MUTATION,
    {
      onCompleted: () => {
        toast.success('SemGrade created')
        navigate(routes.semGrades())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateSemGradeInput) => {
    createSemGrade({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SemGrade</h2>
      </header>
      <div className="rw-segment-main">
        <SemGradeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSemGrade
