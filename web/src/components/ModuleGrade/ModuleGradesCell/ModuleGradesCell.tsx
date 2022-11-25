import type { FindModuleGrades } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ModuleGrades from 'src/components/ModuleGrade/ModuleGrades'

export const QUERY = gql`
  query FindModuleGrades {
    moduleGrades {
      id
      grade
      createdAt
      updatedAt
      studentId
      moduleId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No moduleGrades yet. '}
      <Link
        to={routes.newModuleGrade()}
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

export const Success = ({ moduleGrades }: CellSuccessProps<FindModuleGrades>) => {
  return <ModuleGrades moduleGrades={moduleGrades} />
}
