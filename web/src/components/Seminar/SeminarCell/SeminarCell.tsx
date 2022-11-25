import type { FindSeminarById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Seminar from 'src/components/Seminar/Seminar'

export const QUERY = gql`
  query FindSeminarById($id: String!) {
    seminar: seminar(id: $id) {
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

export const Empty = () => <div>Seminar not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ seminar }: CellSuccessProps<FindSeminarById>) => {
  return <Seminar seminar={seminar} />
}
