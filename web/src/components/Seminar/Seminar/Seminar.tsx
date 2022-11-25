
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteSeminarMutationVariables, FindSeminarById } from 'types/graphql'

const DELETE_SEMINAR_MUTATION = gql`
  mutation DeleteSeminarMutation($id: String!) {
    deleteSeminar(id: $id) {
      id
    }
  }
`

interface Props {
  seminar: NonNullable<FindSeminarById['seminar']>
}

const Seminar = ({ seminar }: Props) => {
  const [deleteSeminar] = useMutation(DELETE_SEMINAR_MUTATION, {
    onCompleted: () => {
      toast.success('Seminar deleted')
      navigate(routes.seminars())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteSeminarMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete seminar ' + id + '?')) {
      deleteSeminar({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Seminar {seminar.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{seminar.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{seminar.name}</td>
            </tr><tr>
              <th>Week</th>
              <td>{seminar.week}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(seminar.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(seminar.updatedAt)}</td>
            </tr><tr>
              <th>Subject id</th>
              <td>{seminar.subjectId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSeminar({ id: seminar.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(seminar.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Seminar
