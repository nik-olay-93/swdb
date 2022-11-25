import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ControlWork/ControlWorksCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteControlWorkMutationVariables, FindControlWorks } from 'types/graphql'

const DELETE_CONTROL_WORK_MUTATION = gql`
  mutation DeleteControlWorkMutation($id: String!) {
    deleteControlWork(id: $id) {
      id
    }
  }
`

const ControlWorksList = ({ controlWorks }: FindControlWorks) => {
  const [deleteControlWork] = useMutation(DELETE_CONTROL_WORK_MUTATION, {
    onCompleted: () => {
      toast.success('ControlWork deleted')
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

  const onDeleteClick = (id: DeleteControlWorkMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete controlWork ' + id + '?')) {
      deleteControlWork({ variables: { id } })
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
          {controlWorks.map((controlWork) => (
            <tr key={controlWork.id}>
              <td>{truncate(controlWork.id)}</td>
              <td>{truncate(controlWork.name)}</td>
              <td>{truncate(controlWork.week)}</td>
              <td>{timeTag(controlWork.createdAt)}</td>
              <td>{timeTag(controlWork.updatedAt)}</td>
              <td>{truncate(controlWork.subjectId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.controlWork({ id: controlWork.id })}
                    title={'Show controlWork ' + controlWork.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editControlWork({ id: controlWork.id })}
                    title={'Edit controlWork ' + controlWork.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete controlWork ' + controlWork.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(controlWork.id)}
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

export default ControlWorksList
