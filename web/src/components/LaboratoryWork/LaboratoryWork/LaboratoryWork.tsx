
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteLaboratoryWorkMutationVariables, FindLaboratoryWorkById } from 'types/graphql'

const DELETE_LABORATORY_WORK_MUTATION = gql`
  mutation DeleteLaboratoryWorkMutation($id: String!) {
    deleteLaboratoryWork(id: $id) {
      id
    }
  }
`

interface Props {
  laboratoryWork: NonNullable<FindLaboratoryWorkById['laboratoryWork']>
}

const LaboratoryWork = ({ laboratoryWork }: Props) => {
  const [deleteLaboratoryWork] = useMutation(DELETE_LABORATORY_WORK_MUTATION, {
    onCompleted: () => {
      toast.success('LaboratoryWork deleted')
      navigate(routes.laboratoryWorks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteLaboratoryWorkMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete laboratoryWork ' + id + '?')) {
      deleteLaboratoryWork({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            LaboratoryWork {laboratoryWork.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{laboratoryWork.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{laboratoryWork.name}</td>
            </tr><tr>
              <th>Week</th>
              <td>{laboratoryWork.week}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(laboratoryWork.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(laboratoryWork.updatedAt)}</td>
            </tr><tr>
              <th>Subject id</th>
              <td>{laboratoryWork.subjectId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLaboratoryWork({ id: laboratoryWork.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(laboratoryWork.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default LaboratoryWork
