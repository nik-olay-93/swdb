import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AcademicPlan/AcademicPlansCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteAcademicPlanMutationVariables, FindAcademicPlans } from 'types/graphql'

const DELETE_ACADEMIC_PLAN_MUTATION = gql`
  mutation DeleteAcademicPlanMutation($id: String!) {
    deleteAcademicPlan(id: $id) {
      id
    }
  }
`

const AcademicPlansList = ({ academicPlans }: FindAcademicPlans) => {
  const [deleteAcademicPlan] = useMutation(DELETE_ACADEMIC_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('AcademicPlan deleted')
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

  const onDeleteClick = (id: DeleteAcademicPlanMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete academicPlan ' + id + '?')) {
      deleteAcademicPlan({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {academicPlans.map((academicPlan) => (
            <tr key={academicPlan.id}>
              <td>{truncate(academicPlan.id)}</td>
              <td>{truncate(academicPlan.name)}</td>
              <td>{truncate(academicPlan.description)}</td>
              <td>{timeTag(academicPlan.createdAt)}</td>
              <td>{timeTag(academicPlan.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.academicPlan({ id: academicPlan.id })}
                    title={'Show academicPlan ' + academicPlan.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAcademicPlan({ id: academicPlan.id })}
                    title={'Edit academicPlan ' + academicPlan.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete academicPlan ' + academicPlan.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(academicPlan.id)}
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

export default AcademicPlansList
