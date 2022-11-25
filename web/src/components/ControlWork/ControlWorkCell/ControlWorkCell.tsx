import type { FindControlWorkById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ControlWork from 'src/components/ControlWork/ControlWork'

export const QUERY = gql`
  query FindControlWorkById($id: String!) {
    controlWork: controlWork(id: $id) {
      id
      name
      week
      createdAt
      updatedAt
      subjectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ControlWork not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ controlWork }: CellSuccessProps<FindControlWorkById>) => {
  return <ControlWork controlWork={controlWork} />
}
