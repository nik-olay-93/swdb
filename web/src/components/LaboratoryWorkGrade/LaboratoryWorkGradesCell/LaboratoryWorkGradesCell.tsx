import type { FindLaboratoryWorkGrades } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import LaboratoryWorkGrades from 'src/components/LaboratoryWorkGrade/LaboratoryWorkGrades'

export const QUERY = gql`
  query FindLaboratoryWorkGrades {
    laboratoryWorkGrades {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No laboratoryWorkGrades yet. '}
      <Link
        to={routes.newLaboratoryWorkGrade()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ laboratoryWorkGrades }: CellSuccessProps<FindLaboratoryWorkGrades>) => {
  return <LaboratoryWorkGrades laboratoryWorkGrades={laboratoryWorkGrades} />
}
