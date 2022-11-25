import type { EditLaboratoryWorkGradeById, UpdateLaboratoryWorkGradeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LaboratoryWorkGradeForm from 'src/components/LaboratoryWorkGrade/LaboratoryWorkGradeForm'

export const QUERY = gql`
  query EditLaboratoryWorkGradeById($id: String!) {
    laboratoryWorkGrade: laboratoryWorkGrade(id: $id) {
      id
      grade
      studentId
      lrId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_LABORATORY_WORK_GRADE_MUTATION = gql`
  mutation UpdateLaboratoryWorkGradeMutation($id: String!, $input: UpdateLaboratoryWorkGradeInput!) {
    updateLaboratoryWorkGrade(id: $id, input: $input) {
      id
      grade
      studentId
      lrId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ laboratoryWorkGrade }: CellSuccessProps<EditLaboratoryWorkGradeById>) => {
  const [updateLaboratoryWorkGrade, { loading, error }] = useMutation(
    UPDATE_LABORATORY_WORK_GRADE_MUTATION,
    {
      onCompleted: () => {
        toast.success('LaboratoryWorkGrade updated')
        navigate(routes.laboratoryWorkGrades())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateLaboratoryWorkGradeInput,
    id: EditLaboratoryWorkGradeById['laboratoryWorkGrade']['id']
  ) => {
    updateLaboratoryWorkGrade({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit LaboratoryWorkGrade {laboratoryWorkGrade?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <LaboratoryWorkGradeForm laboratoryWorkGrade={laboratoryWorkGrade} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
