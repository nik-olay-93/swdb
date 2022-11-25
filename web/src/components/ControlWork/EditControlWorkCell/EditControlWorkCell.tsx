import type { EditControlWorkById, UpdateControlWorkInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ControlWorkForm from 'src/components/ControlWork/ControlWorkForm'

export const QUERY = gql`
  query EditControlWorkById($id: String!) {
    controlWork: controlWork(id: $id) {
      id
      name
      week
      createdAt
      updatedAt
      subjectId
    }
  }
`
const UPDATE_CONTROL_WORK_MUTATION = gql`
  mutation UpdateControlWorkMutation($id: String!, $input: UpdateControlWorkInput!) {
    updateControlWork(id: $id, input: $input) {
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

export const Success = ({ controlWork }: CellSuccessProps<EditControlWorkById>) => {
  const [updateControlWork, { loading, error }] = useMutation(
    UPDATE_CONTROL_WORK_MUTATION,
    {
      onCompleted: () => {
        toast.success('ControlWork updated')
        navigate(routes.controlWorks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateControlWorkInput,
    id: EditControlWorkById['controlWork']['id']
  ) => {
    updateControlWork({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ControlWork {controlWork?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ControlWorkForm controlWork={controlWork} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
