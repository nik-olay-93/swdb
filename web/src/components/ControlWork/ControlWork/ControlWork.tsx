
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteControlWorkMutationVariables, FindControlWorkById } from 'types/graphql'

const DELETE_CONTROL_WORK_MUTATION = gql`
  mutation DeleteControlWorkMutation($id: String!) {
    deleteControlWork(id: $id) {
      id
    }
  }
`

interface Props {
  controlWork: NonNullable<FindControlWorkById['controlWork']>
}

const ControlWork = ({ controlWork }: Props) => {
  const [deleteControlWork] = useMutation(DELETE_CONTROL_WORK_MUTATION, {
    onCompleted: () => {
      toast.success('ControlWork deleted')
      navigate(routes.controlWorks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteControlWorkMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete controlWork ' + id + '?')) {
      deleteControlWork({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ControlWork {controlWork.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{controlWork.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{controlWork.name}</td>
            </tr><tr>
              <th>Week</th>
              <td>{controlWork.week}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(controlWork.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(controlWork.updatedAt)}</td>
            </tr><tr>
              <th>Subject id</th>
              <td>{controlWork.subjectId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editControlWork({ id: controlWork.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(controlWork.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ControlWork
