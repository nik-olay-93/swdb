
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteDepartmentMutationVariables, FindDepartmentById } from 'types/graphql'

const DELETE_DEPARTMENT_MUTATION = gql`
  mutation DeleteDepartmentMutation($id: String!) {
    deleteDepartment(id: $id) {
      id
    }
  }
`

interface Props {
  department: NonNullable<FindDepartmentById['department']>
}

const Department = ({ department }: Props) => {
  const [deleteDepartment] = useMutation(DELETE_DEPARTMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Department deleted')
      navigate(routes.departments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteDepartmentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete department ' + id + '?')) {
      deleteDepartment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Department {department.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{department.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{department.name}</td>
            </tr><tr>
              <th>Description</th>
              <td>{department.description}</td>
            </tr><tr>
              <th>Faculty id</th>
              <td>{department.facultyId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(department.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(department.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDepartment({ id: department.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(department.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Department
