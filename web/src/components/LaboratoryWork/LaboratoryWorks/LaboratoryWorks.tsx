import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/LaboratoryWork/LaboratoryWorksCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteLaboratoryWorkMutationVariables, FindLaboratoryWorks } from 'types/graphql'

const DELETE_LABORATORY_WORK_MUTATION = gql`
  mutation DeleteLaboratoryWorkMutation($id: String!) {
    deleteLaboratoryWork(id: $id) {
      id
    }
  }
`

const LaboratoryWorksList = ({ laboratoryWorks }: FindLaboratoryWorks) => {
  const [deleteLaboratoryWork] = useMutation(DELETE_LABORATORY_WORK_MUTATION, {
    onCompleted: () => {
      toast.success('LaboratoryWork deleted')
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

  const onDeleteClick = (id: DeleteLaboratoryWorkMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete laboratoryWork ' + id + '?')) {
      deleteLaboratoryWork({ variables: { id } })
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
          {laboratoryWorks.map((laboratoryWork) => (
            <tr key={laboratoryWork.id}>
              <td>{truncate(laboratoryWork.id)}</td>
              <td>{truncate(laboratoryWork.name)}</td>
              <td>{truncate(laboratoryWork.week)}</td>
              <td>{timeTag(laboratoryWork.createdAt)}</td>
              <td>{timeTag(laboratoryWork.updatedAt)}</td>
              <td>{truncate(laboratoryWork.subjectId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.laboratoryWork({ id: laboratoryWork.id })}
                    title={'Show laboratoryWork ' + laboratoryWork.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLaboratoryWork({ id: laboratoryWork.id })}
                    title={'Edit laboratoryWork ' + laboratoryWork.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete laboratoryWork ' + laboratoryWork.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(laboratoryWork.id)}
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

export default LaboratoryWorksList
