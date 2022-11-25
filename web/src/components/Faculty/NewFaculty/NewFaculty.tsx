import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FacultyForm from 'src/components/Faculty/FacultyForm'

import type { CreateFacultyInput } from 'types/graphql'

const CREATE_FACULTY_MUTATION = gql`
  mutation CreateFacultyMutation($input: CreateFacultyInput!) {
    createFaculty(input: $input) {
      id
    }
  }
`

const NewFaculty = () => {
  const [createFaculty, { loading, error }] = useMutation(
    CREATE_FACULTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Faculty created')
        navigate(routes.faculties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateFacultyInput) => {
    createFaculty({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Faculty</h2>
      </header>
      <div className="rw-segment-main">
        <FacultyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFaculty
