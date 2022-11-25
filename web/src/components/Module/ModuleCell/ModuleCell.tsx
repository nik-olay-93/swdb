import type { FindModuleById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Module from 'src/components/Module/Module'

export const QUERY = gql`
  query FindModuleById($id: String!) {
    module: module(id: $id) {
      id
      name
      minGrade
      okGrade
      goodGrade
      maxGrade
      createdAt
      updatedAt
      subjectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Module not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ module }: CellSuccessProps<FindModuleById>) => {
  return <Module module={module} />
}
