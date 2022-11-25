import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/SemGrade/SemGradesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type { DeleteSemGradeMutationVariables, FindSemGrades } from 'types/graphql'

const DELETE_SEM_GRADE_MUTATION = gql`
  mutation DeleteSemGradeMutation($id: String!) {
    deleteSemGrade(id: $id) {
      id
    }
  }
`

const SemGradesList = ({ semGrades }: FindSemGrades) => {
  const [deleteSemGrade] = useMutation(DELETE_SEM_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('SemGrade deleted')
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

  const onDeleteClick = (id: DeleteSemGradeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete semGrade ' + id + '?')) {
      deleteSemGrade({ variables: { id } })
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
            <th>Seminar id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {semGrades.map((semGrade) => (
            <tr key={semGrade.id}>
              <td>{truncate(semGrade.id)}</td>
              <td>{formatEnum(semGrade.grade)}</td>
              <td>{truncate(semGrade.studentId)}</td>
              <td>{truncate(semGrade.seminarId)}</td>
              <td>{timeTag(semGrade.createdAt)}</td>
              <td>{timeTag(semGrade.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.semGrade({ id: semGrade.id })}
                    title={'Show semGrade ' + semGrade.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSemGrade({ id: semGrade.id })}
                    title={'Edit semGrade ' + semGrade.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete semGrade ' + semGrade.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(semGrade.id)}
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

export default SemGradesList
