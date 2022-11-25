import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/LaboratoryWorkGrade/LaboratoryWorkGradesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type { DeleteLaboratoryWorkGradeMutationVariables, FindLaboratoryWorkGrades } from 'types/graphql'

const DELETE_LABORATORY_WORK_GRADE_MUTATION = gql`
  mutation DeleteLaboratoryWorkGradeMutation($id: String!) {
    deleteLaboratoryWorkGrade(id: $id) {
      id
    }
  }
`

const LaboratoryWorkGradesList = ({ laboratoryWorkGrades }: FindLaboratoryWorkGrades) => {
  const [deleteLaboratoryWorkGrade] = useMutation(DELETE_LABORATORY_WORK_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('LaboratoryWorkGrade deleted')
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

  const onDeleteClick = (id: DeleteLaboratoryWorkGradeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete laboratoryWorkGrade ' + id + '?')) {
      deleteLaboratoryWorkGrade({ variables: { id } })
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
            <th>Lr id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {laboratoryWorkGrades.map((laboratoryWorkGrade) => (
            <tr key={laboratoryWorkGrade.id}>
              <td>{truncate(laboratoryWorkGrade.id)}</td>
              <td>{formatEnum(laboratoryWorkGrade.grade)}</td>
              <td>{truncate(laboratoryWorkGrade.studentId)}</td>
              <td>{truncate(laboratoryWorkGrade.lrId)}</td>
              <td>{timeTag(laboratoryWorkGrade.createdAt)}</td>
              <td>{timeTag(laboratoryWorkGrade.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.laboratoryWorkGrade({ id: laboratoryWorkGrade.id })}
                    title={'Show laboratoryWorkGrade ' + laboratoryWorkGrade.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLaboratoryWorkGrade({ id: laboratoryWorkGrade.id })}
                    title={'Edit laboratoryWorkGrade ' + laboratoryWorkGrade.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete laboratoryWorkGrade ' + laboratoryWorkGrade.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(laboratoryWorkGrade.id)}
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

export default LaboratoryWorkGradesList
