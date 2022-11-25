
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag,  } from 'src/lib/formatters'

import type { DeleteControlWorkGradeMutationVariables, FindControlWorkGradeById } from 'types/graphql'

const DELETE_CONTROL_WORK_GRADE_MUTATION = gql`
  mutation DeleteControlWorkGradeMutation($id: String!) {
    deleteControlWorkGrade(id: $id) {
      id
    }
  }
`

interface Props {
  controlWorkGrade: NonNullable<FindControlWorkGradeById['controlWorkGrade']>
}

const ControlWorkGrade = ({ controlWorkGrade }: Props) => {
  const [deleteControlWorkGrade] = useMutation(DELETE_CONTROL_WORK_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('ControlWorkGrade deleted')
      navigate(routes.controlWorkGrades())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteControlWorkGradeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete controlWorkGrade ' + id + '?')) {
      deleteControlWorkGrade({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ControlWorkGrade {controlWorkGrade.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{controlWorkGrade.id}</td>
            </tr><tr>
              <th>Grade</th>
              <td>{formatEnum(controlWorkGrade.grade)}</td>
            </tr><tr>
              <th>Student id</th>
              <td>{controlWorkGrade.studentId}</td>
            </tr><tr>
              <th>Cm id</th>
              <td>{controlWorkGrade.cmId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(controlWorkGrade.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(controlWorkGrade.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editControlWorkGrade({ id: controlWorkGrade.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(controlWorkGrade.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ControlWorkGrade
