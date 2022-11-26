import type { FindGroupQuery, FindGroupQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GroupTable from '../GroupTable/GroupTable'

export const QUERY = gql`
  query FindGroupQuery($id: String!) {
    group: group(id: $id) {
      id
      name
      course {
        id
        academicPlan {
          id
          name
        }
        subjects {
          id
          name
          minGrade
          okGrade
          goodGrade
          maxGrade
          modules {
            id
          }
        }
      }
      students {
        id
        name
        surname
        middlename
        tid
        ModuleGrade {
          id
          grade
          moduleId
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindGroupQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  group,
}: CellSuccessProps<FindGroupQuery, FindGroupQueryVariables>) => {
  return (
    <div className="rounded-md bg-gray-200 p-2">
      <h1 className="text-3xl font-bold">{group.name}</h1>
      <GroupTable group={group} />
    </div>
  )
}
