import {
  CreateSeminarGradeMutation,
  CreateSeminarGradeMutationVariables,
  FindSubjectInfoQuery,
  SemGrade,
  SemStatus,
  UpdateSeminarGradeMutation,
  UpdateSeminarGradeMutationVariables,
} from 'types/graphql'

import {
  Form,
  SelectField,
  Submit,
  SubmitHandler,
  useForm,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { useRefetch } from 'src/lib/RefetchContext'

export interface SubjectSemsProps {
  students: FindSubjectInfoQuery['groupInfo']['students']
  subject: FindSubjectInfoQuery['subjectInfo']
  editable?: boolean
}

const CREATE_SG = gql`
  mutation CreateSeminarGradeMutation($input: CreateSemGradeInput!) {
    createSemGrade(input: $input) {
      id
    }
  }
`

const UPDATE_SG = gql`
  mutation UpdateSeminarGradeMutation(
    $id: String!
    $grade: UpdateSemGradeInput!
  ) {
    updateSemGrade(id: $id, input: $grade) {
      id
    }
  }
`

interface FormValues {
  [key: string]: SemStatus
}

const SubjectSems = ({
  students,
  subject,
  editable = false,
}: SubjectSemsProps) => {
  const formMethods = useForm()
  const refetch = useRefetch()

  const [create] = useMutation<
    CreateSeminarGradeMutation,
    CreateSeminarGradeMutationVariables
  >(CREATE_SG)

  const [update] = useMutation<
    UpdateSeminarGradeMutation,
    UpdateSeminarGradeMutationVariables
  >(UPDATE_SG)

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const promises = Object.entries(data).map(([key, grade]) => {
      if (!grade) return Promise.resolve()
      if (key.includes('-')) {
        const [studentId, seminarId] = key.split('-')
        return create({
          variables: {
            input: {
              studentId,
              seminarId,
              grade,
            },
          },
        })
      }
      if (
        students
          .reduce(
            (acc, student) => [...acc, ...student.LaboratoryWorkGrade],
            [] as SemGrade[]
          )
          .find((mg) => mg.id === key)?.grade === grade
      ) {
        return Promise.resolve()
      }
      return update({
        variables: {
          id: key,
          grade: {
            grade,
          },
        },
      })
    })
    Promise.all(promises).then(async () => {
      await refetch()
      formMethods.reset()
    })
  }

  return (
    <Form
      formMethods={formMethods}
      config={{ mode: 'onBlur' }}
      onSubmit={onSubmit}
    >
      <table className="border-separate border-spacing-0 rounded-md">
        <thead>
          <tr className="bg-blue-200">
            <th className="rounded-tl-md border-r border-gray-500 p-2">№</th>
            <th className="border-r border-gray-500 p-2">ФИО</th>
            {subject.seminars.map((sem) => (
              <th
                key={sem.id}
                className="border-r border-gray-500 p-2 last:rounded-tr-md last:border-none"
              >
                <span>{sem.name}</span>
                <span className="text-sm font-normal">{sem.description}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={student.id} className="even:bg-gray-100">
                <td className="border-r border-gray-500 p-2 text-right">
                  {index + 1}
                </td>
                <td className="border-r border-gray-500 p-2">
                  <Link to={routes.student({ id: student.id })}>
                    {student.surname} {student.name.substring(0, 1)}.{' '}
                    {student.middlename.substring(0, 1)}.
                  </Link>
                </td>
                {subject.seminars.map((sem) => {
                  const sg = student.SemGrade.find(
                    (grade) => grade.seminarId === sem.id
                  )
                  const grade = sg?.grade
                  const cur_grade = editable
                    ? formMethods.watch(
                        sg?.id || `${student.id}-${sem.id}`,
                        grade
                      )
                    : grade

                  let img: string

                  switch (cur_grade) {
                    case 'Attended':
                      img = '/tasks/task_issued_2.gif'
                      break
                    case 'Worked':
                      img = '/tasks/task_collected_2.gif'
                      break
                    default:
                      break
                  }

                  return (
                    <td
                      key={sem.id + grade}
                      className="border-r border-gray-500 p-2 last:border-none"
                    >
                      <div className="flex flex-row items-center">
                        {img && (
                          <div className="flex flex-row items-center justify-center">
                            <img src={img} alt={sem.name} />
                          </div>
                        )}
                        {editable && (
                          <SelectField
                            name={sg?.id || `${student.id}-${sem.id}`}
                            defaultValue={grade}
                            className="w-4 rounded-md bg-inherit"
                            onChange={() => {
                              formMethods.trigger()
                            }}
                          >
                            <option value={undefined}></option>
                            <option value="Attended">Посещен</option>
                            <option value="Worked">Работа</option>
                          </SelectField>
                        )}
                      </div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {formMethods.formState.isDirty && (
        <>
          <button
            onClick={() => {
              formMethods.reset()
            }}
            className="font-semibold text-red-400"
          >
            Сбросить
          </button>
          <Submit
            className={`m-2 rounded-md p-2 font-semibold text-white ${
              formMethods.formState.isValid ? 'bg-green-600' : 'bg-gray-400'
            }`}
          >
            Сохранить изменения
          </Submit>
        </>
      )}
    </Form>
  )
}

export default SubjectSems
