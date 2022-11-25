
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteModuleGradeMutationVariables, FindModuleGradeById } from 'types/graphql'

const DELETE_MODULE_GRADE_MUTATION = gql`
  mutation DeleteModuleGradeMutation($id: String!) {
    deleteModuleGrade(id: $id) {
      id
    }
  }
`

interface Props {
  moduleGrade: NonNullable<FindModuleGradeById['moduleGrade']>
}

const ModuleGrade = ({ moduleGrade }: Props) => {
  const [deleteModuleGrade] = useMutation(DELETE_MODULE_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('ModuleGrade deleted')
      navigate(routes.moduleGrades())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteModuleGradeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete moduleGrade ' + id + '?')) {
      deleteModuleGrade({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ModuleGrade {moduleGrade.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{moduleGrade.id}</td>
            </tr><tr>
              <th>Grade</th>
              <td>{moduleGrade.grade}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(moduleGrade.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(moduleGrade.updatedAt)}</td>
            </tr><tr>
              <th>Student id</th>
              <td>{moduleGrade.studentId}</td>
            </tr><tr>
              <th>Module id</th>
              <td>{moduleGrade.moduleId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editModuleGrade({ id: moduleGrade.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(moduleGrade.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ModuleGrade
