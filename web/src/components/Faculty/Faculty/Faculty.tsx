
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteFacultyMutationVariables, FindFacultyById } from 'types/graphql'

const DELETE_FACULTY_MUTATION = gql`
  mutation DeleteFacultyMutation($id: String!) {
    deleteFaculty(id: $id) {
      id
    }
  }
`

interface Props {
  faculty: NonNullable<FindFacultyById['faculty']>
}

const Faculty = ({ faculty }: Props) => {
  const [deleteFaculty] = useMutation(DELETE_FACULTY_MUTATION, {
    onCompleted: () => {
      toast.success('Faculty deleted')
      navigate(routes.faculties())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteFacultyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete faculty ' + id + '?')) {
      deleteFaculty({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Faculty {faculty.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{faculty.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{faculty.name}</td>
            </tr><tr>
              <th>Description</th>
              <td>{faculty.description}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(faculty.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(faculty.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFaculty({ id: faculty.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(faculty.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Faculty
