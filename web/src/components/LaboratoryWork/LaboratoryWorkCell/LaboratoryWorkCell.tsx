import type { FindLaboratoryWorkById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import LaboratoryWork from 'src/components/LaboratoryWork/LaboratoryWork'

export const QUERY = gql`
  query FindLaboratoryWorkById($id: String!) {
    laboratoryWork: laboratoryWork(id: $id) {
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

export const Empty = () => <div>LaboratoryWork not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ laboratoryWork }: CellSuccessProps<FindLaboratoryWorkById>) => {
  return <LaboratoryWork laboratoryWork={laboratoryWork} />
}
