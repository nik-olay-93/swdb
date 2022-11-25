
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteStudentMutationVariables, FindStudentById } from 'types/graphql'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: String!) {
    deleteStudent(id: $id) {
      id
    }
  }
`

interface Props {
  student: NonNullable<FindStudentById['student']>
}

const Student = ({ student }: Props) => {
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
      navigate(routes.students())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStudentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Student {student.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{student.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{student.name}</td>
            </tr><tr>
              <th>Surname</th>
              <td>{student.surname}</td>
            </tr><tr>
              <th>Middlename</th>
              <td>{student.middlename}</td>
            </tr><tr>
              <th>Tid</th>
              <td>{student.tid}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(student.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(student.updatedAt)}</td>
            </tr><tr>
              <th>Group id</th>
              <td>{student.groupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudent({ id: student.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(student.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Student
