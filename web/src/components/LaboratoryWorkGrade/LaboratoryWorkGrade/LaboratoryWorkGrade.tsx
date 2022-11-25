
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag,  } from 'src/lib/formatters'

import type { DeleteLaboratoryWorkGradeMutationVariables, FindLaboratoryWorkGradeById } from 'types/graphql'

const DELETE_LABORATORY_WORK_GRADE_MUTATION = gql`
  mutation DeleteLaboratoryWorkGradeMutation($id: String!) {
    deleteLaboratoryWorkGrade(id: $id) {
      id
    }
  }
`

interface Props {
  laboratoryWorkGrade: NonNullable<FindLaboratoryWorkGradeById['laboratoryWorkGrade']>
}

const LaboratoryWorkGrade = ({ laboratoryWorkGrade }: Props) => {
  const [deleteLaboratoryWorkGrade] = useMutation(DELETE_LABORATORY_WORK_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('LaboratoryWorkGrade deleted')
      navigate(routes.laboratoryWorkGrades())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteLaboratoryWorkGradeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete laboratoryWorkGrade ' + id + '?')) {
      deleteLaboratoryWorkGrade({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            LaboratoryWorkGrade {laboratoryWorkGrade.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{laboratoryWorkGrade.id}</td>
            </tr><tr>
              <th>Grade</th>
              <td>{formatEnum(laboratoryWorkGrade.grade)}</td>
            </tr><tr>
              <th>Student id</th>
              <td>{laboratoryWorkGrade.studentId}</td>
            </tr><tr>
              <th>Lr id</th>
              <td>{laboratoryWorkGrade.lrId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(laboratoryWorkGrade.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(laboratoryWorkGrade.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLaboratoryWorkGrade({ id: laboratoryWorkGrade.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(laboratoryWorkGrade.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default LaboratoryWorkGrade
