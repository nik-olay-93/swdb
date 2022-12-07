import {
  ControlWorkGrade,
  CreateControlWorkGradeMutation,
  CreateControlWorkGradeMutationVariables,
  FindSubjectInfoQuery,
  TaskStatus,
  UpdateControlWorkGradeMutation,
  UpdateControlWorkGradeMutationVariables,
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

export interface SubjectCMsProps {
  students: FindSubjectInfoQuery['groupInfo']['students']
  subject: FindSubjectInfoQuery['subjectInfo']
  editable?: boolean
}

const CREATE_CM = gql`
  mutation CreateControlWorkGradeMutation(
    $input: CreateControlWorkGradeInput!
  ) {
    createControlWorkGrade(input: $input) {
      id
    }
  }
`

const UPDATE_CM = gql`
  mutation UpdateControlWorkGradeMutation(
    $id: String!
    $grade: UpdateControlWorkGradeInput!
  ) {
    updateControlWorkGrade(id: $id, input: $grade) {
      id
    }
  }
`

interface FormValues {
  [key: string]: TaskStatus
}

const SubjectCMs = ({
  students,
  subject,
  editable = false,
}: SubjectCMsProps) => {
  const formMethods = useForm()
  const refetch = useRefetch()

  const [create] = useMutation<
    CreateControlWorkGradeMutation,
    CreateControlWorkGradeMutationVariables
  >(CREATE_CM)

  const [update] = useMutation<
    UpdateControlWorkGradeMutation,
    UpdateControlWorkGradeMutationVariables
  >(UPDATE_CM)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const promises = Object.entries(data).map(([key, grade]) => {
      if (!grade) return Promise.resolve()
      if (key.includes('-')) {
        const [studentId, cmId] = key.split('-')
        return create({
          variables: {
            input: {
              cmId,
              studentId,
              grade,
            },
          },
        })
      }
      if (
        students
          .reduce(
            (acc, student) => [...acc, ...student.ControlWorkGrade],
            [] as ControlWorkGrade[]
          )
          .find((lwg) => lwg.id === key)?.grade === grade
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
            {subject.ControlWorks.map((cw) => (
              <th
                key={cw.id}
                className="border-r border-gray-500 p-2 last:rounded-tr-md last:border-none"
              >
                <div className="flex flex-col">
                  <span>{cw.name}</span>
                  <span className="text-sm font-normal">
                    {cw.week}-я неделя
                  </span>
                </div>
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
                {subject.ControlWorks.map((cw) => {
                  const cwg = student.ControlWorkGrade.find(
                    (grade) => grade.cmId === cw.id
                  )
                  const grade = cwg?.grade
                  const cur_grade = editable
                    ? formMethods.watch(
                        cwg?.id || `${student.id}-${cw.id}`,
                        grade
                      )
                    : grade

                  let img: string

                  switch (cur_grade) {
                    case 'Issued':
                      img = '/tasks/task_issued.gif'
                      break
                    case 'Done':
                      img = '/tasks/task_collected.gif'
                      break
                    case 'Asserted':
                      img = '/tasks/task_approved.gif'
                      break
                    case 'AssertedBehind':
                      img = '/tasks/task_approved_after.gif'
                      break
                    case 'AssertedAhead':
                      img = '/tasks/task_approved_before.gif'
                      break
                    default:
                      break
                  }
                  return (
                    <td
                      key={cw.id}
                      className="border-r border-gray-500 p-2 last:border-none"
                    >
                      <div className="flex flex-row items-center justify-center">
                        {img && (
                          <div className="flex flex-row items-center justify-center">
                            <img src={img} alt={cw.name} />
                          </div>
                        )}
                        {editable && (
                          <SelectField
                            name={cwg?.id || `${student.id}-${cw.id}`}
                            defaultValue={grade}
                            className="w-4 rounded-md bg-inherit"
                            onChange={() => {
                              formMethods.trigger()
                            }}
                          >
                            <option value={undefined}></option>
                            <option value="Issued">Выдано</option>
                            <option value="Done">Сдано</option>
                            <option value="Asserted">Проверено</option>
                            <option value="AssertedBehind">
                              Проверено позже срока
                            </option>
                            <option value="AssertedAhead">
                              Проверено раньше срока
                            </option>
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

export default SubjectCMs
