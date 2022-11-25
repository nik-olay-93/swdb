
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteCourseMutationVariables, FindCourseById } from 'types/graphql'

const DELETE_COURSE_MUTATION = gql`
  mutation DeleteCourseMutation($id: String!) {
    deleteCourse(id: $id) {
      id
    }
  }
`

interface Props {
  course: NonNullable<FindCourseById['course']>
}

const Course = ({ course }: Props) => {
  const [deleteCourse] = useMutation(DELETE_COURSE_MUTATION, {
    onCompleted: () => {
      toast.success('Course deleted')
      navigate(routes.courses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCourseMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete course ' + id + '?')) {
      deleteCourse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Course {course.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{course.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{course.name}</td>
            </tr><tr>
              <th>Description</th>
              <td>{course.description}</td>
            </tr><tr>
              <th>Semester</th>
              <td>{course.semester}</td>
            </tr><tr>
              <th>Academic plan id</th>
              <td>{course.academicPlanId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(course.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(course.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCourse({ id: course.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(course.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Course
