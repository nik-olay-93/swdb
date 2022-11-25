import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ModuleGrade/ModuleGradesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteModuleGradeMutationVariables, FindModuleGrades } from 'types/graphql'

const DELETE_MODULE_GRADE_MUTATION = gql`
  mutation DeleteModuleGradeMutation($id: String!) {
    deleteModuleGrade(id: $id) {
      id
    }
  }
`

const ModuleGradesList = ({ moduleGrades }: FindModuleGrades) => {
  const [deleteModuleGrade] = useMutation(DELETE_MODULE_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('ModuleGrade deleted')
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

  const onDeleteClick = (id: DeleteModuleGradeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete moduleGrade ' + id + '?')) {
      deleteModuleGrade({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Grade</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Student id</th>
            <th>Module id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {moduleGrades.map((moduleGrade) => (
            <tr key={moduleGrade.id}>
              <td>{truncate(moduleGrade.id)}</td>
              <td>{truncate(moduleGrade.grade)}</td>
              <td>{timeTag(moduleGrade.createdAt)}</td>
              <td>{timeTag(moduleGrade.updatedAt)}</td>
              <td>{truncate(moduleGrade.studentId)}</td>
              <td>{truncate(moduleGrade.moduleId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.moduleGrade({ id: moduleGrade.id })}
                    title={'Show moduleGrade ' + moduleGrade.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editModuleGrade({ id: moduleGrade.id })}
                    title={'Edit moduleGrade ' + moduleGrade.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete moduleGrade ' + moduleGrade.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(moduleGrade.id)}
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

export default ModuleGradesList
