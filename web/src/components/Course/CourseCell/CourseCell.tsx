import type { FindCourseById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Course from 'src/components/Course/Course'

export const QUERY = gql`
  query FindCourseById($id: String!) {
    course: course(id: $id) {
      id
      name
      description
      semester
      academicPlanId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Course not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ course }: CellSuccessProps<FindCourseById>) => {
  return <Course course={course} />
}
