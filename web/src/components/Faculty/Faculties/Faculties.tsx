import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Faculty/FacultiesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteFacultyMutationVariables, FindFaculties } from 'types/graphql'

const DELETE_FACULTY_MUTATION = gql`
  mutation DeleteFacultyMutation($id: String!) {
    deleteFaculty(id: $id) {
      id
    }
  }
`

const FacultiesList = ({ faculties }: FindFaculties) => {
  const [deleteFaculty] = useMutation(DELETE_FACULTY_MUTATION, {
    onCompleted: () => {
      toast.success('Faculty deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteFacultyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete faculty ' + id + '?')) {
      deleteFaculty({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{truncate(faculty.id)}</td>
              <td>{truncate(faculty.name)}</td>
              <td>{truncate(faculty.description)}</td>
              <td>{timeTag(faculty.createdAt)}</td>
              <td>{timeTag(faculty.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.faculty({ id: faculty.id })}
                    title={'Show faculty ' + faculty.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFaculty({ id: faculty.id })}
                    title={'Edit faculty ' + faculty.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete faculty ' + faculty.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(faculty.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FacultiesList
