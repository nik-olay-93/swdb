import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ControlWorkGrade/ControlWorkGradesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type { DeleteControlWorkGradeMutationVariables, FindControlWorkGrades } from 'types/graphql'

const DELETE_CONTROL_WORK_GRADE_MUTATION = gql`
  mutation DeleteControlWorkGradeMutation($id: String!) {
    deleteControlWorkGrade(id: $id) {
      id
    }
  }
`

const ControlWorkGradesList = ({ controlWorkGrades }: FindControlWorkGrades) => {
  const [deleteControlWorkGrade] = useMutation(DELETE_CONTROL_WORK_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('ControlWorkGrade deleted')
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

  const onDeleteClick = (id: DeleteControlWorkGradeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete controlWorkGrade ' + id + '?')) {
      deleteControlWorkGrade({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Grade</th>
            <th>Student id</th>
            <th>Cm id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {controlWorkGrades.map((controlWorkGrade) => (
            <tr key={controlWorkGrade.id}>
              <td>{truncate(controlWorkGrade.id)}</td>
              <td>{formatEnum(controlWorkGrade.grade)}</td>
              <td>{truncate(controlWorkGrade.studentId)}</td>
              <td>{truncate(controlWorkGrade.cmId)}</td>
              <td>{timeTag(controlWorkGrade.createdAt)}</td>
              <td>{timeTag(controlWorkGrade.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.controlWorkGrade({ id: controlWorkGrade.id })}
                    title={'Show controlWorkGrade ' + controlWorkGrade.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editControlWorkGrade({ id: controlWorkGrade.id })}
                    title={'Edit controlWorkGrade ' + controlWorkGrade.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete controlWorkGrade ' + controlWorkGrade.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(controlWorkGrade.id)}
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

export default ControlWorkGradesList
