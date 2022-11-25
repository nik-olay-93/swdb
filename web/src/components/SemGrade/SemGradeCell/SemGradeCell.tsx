import type { FindSemGradeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SemGrade from 'src/components/SemGrade/SemGrade'

export const QUERY = gql`
  query FindSemGradeById($id: String!) {
    semGrade: semGrade(id: $id) {
      id
      grade
      studentId
      seminarId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SemGrade not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ semGrade }: CellSuccessProps<FindSemGradeById>) => {
  return <SemGrade semGrade={semGrade} />
}
