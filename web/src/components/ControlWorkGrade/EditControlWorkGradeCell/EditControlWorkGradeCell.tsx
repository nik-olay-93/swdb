import type { EditControlWorkGradeById, UpdateControlWorkGradeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ControlWorkGradeForm from 'src/components/ControlWorkGrade/ControlWorkGradeForm'

export const QUERY = gql`
  query EditControlWorkGradeById($id: String!) {
    controlWorkGrade: controlWorkGrade(id: $id) {
      id
      grade
      studentId
      cmId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_CONTROL_WORK_GRADE_MUTATION = gql`
  mutation UpdateControlWorkGradeMutation($id: String!, $input: UpdateControlWorkGradeInput!) {
    updateControlWorkGrade(id: $id, input: $input) {
      id
      grade
      studentId
      cmId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ controlWorkGrade }: CellSuccessProps<EditControlWorkGradeById>) => {
  const [updateControlWorkGrade, { loading, error }] = useMutation(
    UPDATE_CONTROL_WORK_GRADE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ControlWorkGrade updated')
        navigate(routes.controlWorkGrades())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateControlWorkGradeInput,
    id: EditControlWorkGradeById['controlWorkGrade']['id']
  ) => {
    updateControlWorkGrade({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ControlWorkGrade {controlWorkGrade?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ControlWorkGradeForm controlWorkGrade={controlWorkGrade} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
