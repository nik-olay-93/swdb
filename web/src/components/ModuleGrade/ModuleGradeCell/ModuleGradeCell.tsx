import type { FindModuleGradeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ModuleGrade from 'src/components/ModuleGrade/ModuleGrade'

export const QUERY = gql`
  query FindModuleGradeById($id: String!) {
    moduleGrade: moduleGrade(id: $id) {
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

export const Empty = () => <div>ModuleGrade not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ moduleGrade }: CellSuccessProps<FindModuleGradeById>) => {
  return <ModuleGrade moduleGrade={moduleGrade} />
}
