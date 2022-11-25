
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteGroupMutationVariables, FindGroupById } from 'types/graphql'

const DELETE_GROUP_MUTATION = gql`
  mutation DeleteGroupMutation($id: String!) {
    deleteGroup(id: $id) {
      id
    }
  }
`

interface Props {
  group: NonNullable<FindGroupById['group']>
}

const Group = ({ group }: Props) => {
  const [deleteGroup] = useMutation(DELETE_GROUP_MUTATION, {
    onCompleted: () => {
      toast.success('Group deleted')
      navigate(routes.groups())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteGroupMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete group ' + id + '?')) {
      deleteGroup({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Group {group.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{group.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{group.name}</td>
            </tr><tr>
              <th>Course id</th>
              <td>{group.courseId}</td>
            </tr><tr>
              <th>Semester</th>
              <td>{group.semester}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(group.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(group.updatedAt)}</td>
            </tr><tr>
              <th>Department id</th>
              <td>{group.departmentId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGroup({ id: group.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(group.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Group
