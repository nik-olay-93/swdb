import type { FindLaboratoryWorkGradeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import LaboratoryWorkGrade from 'src/components/LaboratoryWorkGrade/LaboratoryWorkGrade'

export const QUERY = gql`
  query FindLaboratoryWorkGradeById($id: String!) {
    laboratoryWorkGrade: laboratoryWorkGrade(id: $id) {
      id
      grade
      studentId
      lrId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>LaboratoryWorkGrade not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ laboratoryWorkGrade }: CellSuccessProps<FindLaboratoryWorkGradeById>) => {
  return <LaboratoryWorkGrade laboratoryWorkGrade={laboratoryWorkGrade} />
}
