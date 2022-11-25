import type { FindControlWorkGradeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ControlWorkGrade from 'src/components/ControlWorkGrade/ControlWorkGrade'

export const QUERY = gql`
  query FindControlWorkGradeById($id: String!) {
    controlWorkGrade: controlWorkGrade(id: $id) {
      id
      grade
      studentId
      cmId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ControlWorkGrade not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ controlWorkGrade }: CellSuccessProps<FindControlWorkGradeById>) => {
  return <ControlWorkGrade controlWorkGrade={controlWorkGrade} />
}
