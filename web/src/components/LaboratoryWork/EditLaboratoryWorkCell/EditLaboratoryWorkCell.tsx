import type { EditLaboratoryWorkById, UpdateLaboratoryWorkInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LaboratoryWorkForm from 'src/components/LaboratoryWork/LaboratoryWorkForm'

export const QUERY = gql`
  query EditLaboratoryWorkById($id: String!) {
    laboratoryWork: laboratoryWork(id: $id) {
      id
      name
      week
      createdAt
      updatedAt
      subjectId
    }
  }
`
const UPDATE_LABORATORY_WORK_MUTATION = gql`
  mutation UpdateLaboratoryWorkMutation($id: String!, $input: UpdateLaboratoryWorkInput!) {
    updateLaboratoryWork(id: $id, input: $input) {
      id
      name
      week
      createdAt
      updatedAt
      subjectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ laboratoryWork }: CellSuccessProps<EditLaboratoryWorkById>) => {
  const [updateLaboratoryWork, { loading, error }] = useMutation(
    UPDATE_LABORATORY_WORK_MUTATION,
    {
      onCompleted: () => {
        toast.success('LaboratoryWork updated')
        navigate(routes.laboratoryWorks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateLaboratoryWorkInput,
    id: EditLaboratoryWorkById['laboratoryWork']['id']
  ) => {
    updateLaboratoryWork({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit LaboratoryWork {laboratoryWork?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <LaboratoryWorkForm laboratoryWork={laboratoryWork} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
