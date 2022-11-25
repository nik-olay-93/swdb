import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ModuleGradeForm from 'src/components/ModuleGrade/ModuleGradeForm'

import type { CreateModuleGradeInput } from 'types/graphql'

const CREATE_MODULE_GRADE_MUTATION = gql`
  mutation CreateModuleGradeMutation($input: CreateModuleGradeInput!) {
    createModuleGrade(input: $input) {
      id
    }
  }
`

const NewModuleGrade = () => {
  const [createModuleGrade, { loading, error }] = useMutation(
    CREATE_MODULE_GRADE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ModuleGrade created')
        navigate(routes.moduleGrades())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateModuleGradeInput) => {
    createModuleGrade({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ModuleGrade</h2>
      </header>
      <div className="rw-segment-main">
        <ModuleGradeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewModuleGrade
