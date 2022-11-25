import type { EditFacultyById, UpdateFacultyInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FacultyForm from 'src/components/Faculty/FacultyForm'

export const QUERY = gql`
  query EditFacultyById($id: String!) {
    faculty: faculty(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`
const UPDATE_FACULTY_MUTATION = gql`
  mutation UpdateFacultyMutation($id: String!, $input: UpdateFacultyInput!) {
    updateFaculty(id: $id, input: $input) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ faculty }: CellSuccessProps<EditFacultyById>) => {
  const [updateFaculty, { loading, error }] = useMutation(
    UPDATE_FACULTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Faculty updated')
        navigate(routes.faculties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateFacultyInput,
    id: EditFacultyById['faculty']['id']
  ) => {
    updateFaculty({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Faculty {faculty?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FacultyForm faculty={faculty} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
