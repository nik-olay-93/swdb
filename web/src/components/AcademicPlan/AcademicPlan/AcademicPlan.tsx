import type {
  DeleteAcademicPlanMutationVariables,
  FindAcademicPlanById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ACADEMIC_PLAN_MUTATION = gql`
  mutation DeleteAcademicPlanMutation($id: String!) {
    deleteAcademicPlan(id: $id) {
      id
    }
  }
`

interface Props {
  academicPlan: NonNullable<FindAcademicPlanById['academicPlan']>
}

const AcademicPlan = ({ academicPlan }: Props) => {
  const [deleteAcademicPlan] = useMutation(DELETE_ACADEMIC_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('AcademicPlan deleted')
      navigate(routes.academicPlans())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAcademicPlanMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete academicPlan ' + id + '?')) {
      deleteAcademicPlan({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AcademicPlan {academicPlan.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{academicPlan.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{academicPlan.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{academicPlan.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(academicPlan.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(academicPlan.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAcademicPlan({ id: academicPlan.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(academicPlan.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AcademicPlan
