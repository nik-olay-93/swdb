import type { EditModuleGradeById, UpdateModuleGradeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ModuleGradeForm from 'src/components/ModuleGrade/ModuleGradeForm'

export const QUERY = gql`
  query EditModuleGradeById($id: String!) {
    moduleGrade: moduleGrade(id: $id) {
      id
      grade
      createdAt
      updatedAt
      studentId
      moduleId
    }
  }
`
const UPDATE_MODULE_GRADE_MUTATION = gql`
  mutation UpdateModuleGradeMutation($id: String!, $input: UpdateModuleGradeInput!) {
    updateModuleGrade(id: $id, input: $input) {
      id
      grade
      createdAt
      updatedAt
      studentId
      moduleId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ moduleGrade }: CellSuccessProps<EditModuleGradeById>) => {
  const [updateModuleGrade, { loading, error }] = useMutation(
    UPDATE_MODULE_GRADE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ModuleGrade updated')
        navigate(routes.moduleGrades())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateModuleGradeInput,
    id: EditModuleGradeById['moduleGrade']['id']
  ) => {
    updateModuleGrade({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ModuleGrade {moduleGrade?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ModuleGradeForm moduleGrade={moduleGrade} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
