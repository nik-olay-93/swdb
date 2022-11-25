import type { EditSemGradeById, UpdateSemGradeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SemGradeForm from 'src/components/SemGrade/SemGradeForm'

export const QUERY = gql`
  query EditSemGradeById($id: String!) {
    semGrade: semGrade(id: $id) {
      id
      grade
      studentId
      seminarId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_SEM_GRADE_MUTATION = gql`
  mutation UpdateSemGradeMutation($id: String!, $input: UpdateSemGradeInput!) {
    updateSemGrade(id: $id, input: $input) {
      id
      grade
      studentId
      seminarId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ semGrade }: CellSuccessProps<EditSemGradeById>) => {
  const [updateSemGrade, { loading, error }] = useMutation(
    UPDATE_SEM_GRADE_MUTATION,
    {
      onCompleted: () => {
        toast.success('SemGrade updated')
        navigate(routes.semGrades())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateSemGradeInput,
    id: EditSemGradeById['semGrade']['id']
  ) => {
    updateSemGrade({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit SemGrade {semGrade?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SemGradeForm semGrade={semGrade} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
