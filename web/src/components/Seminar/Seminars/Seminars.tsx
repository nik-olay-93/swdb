import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Seminar/SeminarsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteSeminarMutationVariables, FindSeminars } from 'types/graphql'

const DELETE_SEMINAR_MUTATION = gql`
  mutation DeleteSeminarMutation($id: String!) {
    deleteSeminar(id: $id) {
      id
    }
  }
`

const SeminarsList = ({ seminars }: FindSeminars) => {
  const [deleteSeminar] = useMutation(DELETE_SEMINAR_MUTATION, {
    onCompleted: () => {
      toast.success('Seminar deleted')
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

  const onDeleteClick = (id: DeleteSeminarMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete seminar ' + id + '?')) {
      deleteSeminar({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Week</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Subject id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {seminars.map((seminar) => (
            <tr key={seminar.id}>
              <td>{truncate(seminar.id)}</td>
              <td>{truncate(seminar.name)}</td>
              <td>{truncate(seminar.week)}</td>
              <td>{timeTag(seminar.createdAt)}</td>
              <td>{timeTag(seminar.updatedAt)}</td>
              <td>{truncate(seminar.subjectId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.seminar({ id: seminar.id })}
                    title={'Show seminar ' + seminar.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSeminar({ id: seminar.id })}
                    title={'Edit seminar ' + seminar.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete seminar ' + seminar.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(seminar.id)}
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

export default SeminarsList
