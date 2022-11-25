import type {
  DeleteStudentMutationVariables,
  FindStudents,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Student/StudentsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: String!) {
    deleteStudent(id: $id) {
      id
    }
  }
`

const StudentsList = ({ students }: FindStudents) => {
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
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

  const onDeleteClick = (id: DeleteStudentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Middlename</th>
            <th>Tid</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Group id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{truncate(student.id)}</td>
              <td>{truncate(student.name)}</td>
              <td>{truncate(student.surname)}</td>
              <td>{truncate(student.middlename)}</td>
              <td>{truncate(student.tid)}</td>
              <td>{timeTag(student.createdAt)}</td>
              <td>{timeTag(student.updatedAt)}</td>
              <td>{truncate(student.groupId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.student({ id: student.id })}
                    title={'Show student ' + student.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStudent({ id: student.id })}
                    title={'Edit student ' + student.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete student ' + student.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(student.id)}
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

export default StudentsList
