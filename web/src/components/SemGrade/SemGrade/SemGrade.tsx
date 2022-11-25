
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag,  } from 'src/lib/formatters'

import type { DeleteSemGradeMutationVariables, FindSemGradeById } from 'types/graphql'

const DELETE_SEM_GRADE_MUTATION = gql`
  mutation DeleteSemGradeMutation($id: String!) {
    deleteSemGrade(id: $id) {
      id
    }
  }
`

interface Props {
  semGrade: NonNullable<FindSemGradeById['semGrade']>
}

const SemGrade = ({ semGrade }: Props) => {
  const [deleteSemGrade] = useMutation(DELETE_SEM_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('SemGrade deleted')
      navigate(routes.semGrades())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteSemGradeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete semGrade ' + id + '?')) {
      deleteSemGrade({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SemGrade {semGrade.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{semGrade.id}</td>
            </tr><tr>
              <th>Grade</th>
              <td>{formatEnum(semGrade.grade)}</td>
            </tr><tr>
              <th>Student id</th>
              <td>{semGrade.studentId}</td>
            </tr><tr>
              <th>Seminar id</th>
              <td>{semGrade.seminarId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(semGrade.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(semGrade.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSemGrade({ id: semGrade.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(semGrade.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SemGrade
