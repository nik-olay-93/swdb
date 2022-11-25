import { GroupsListQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GroupsList from '../GroupsList/GroupsList'

export const QUERY = gql`
  query GroupsListQuery {
    faculties {
      id
      name
      description
      departments {
        id
        name
        description
        groups {
          id
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="text-red-500">Error: {error?.message}</div>
)

export const Success = ({ faculties }: CellSuccessProps<GroupsListQuery>) => {
  return <GroupsList faculties={faculties} />
}
