import {
  CreateLaboratoryWorkGradeMutation,
  CreateLaboratoryWorkGradeMutationVariables,
  FindSubjectInfoQuery,
  LaboratoryWorkGrade,
  TaskStatus,
  UpdateLaboratoryWorkMutation,
  UpdateLaboratoryWorkMutationVariables,
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

export interface SubjectLRsProps {
  students: FindSubjectInfoQuery['groupInfo']['students']
  subject: FindSubjectInfoQuery['subjectInfo']
  editable?: boolean
}

const CREATE_LW = gql`
  mutation CreateLaboratoryWorkGradeMutation(
    $input: CreateLaboratoryWorkGradeInput!
  ) {
    createLaboratoryWorkGrade(input: $input) {
      id
    }
  }
`

const UPDATE_LW = gql`
  mutation UpdateLaboratoryWorkMutation(
    $id: String!
    $grade: UpdateLaboratoryWorkGradeInput!
  ) {
    updateLaboratoryWorkGrade(id: $id, input: $grade) {
      id
    }
  }
`

interface FormValues {
  [key: string]: TaskStatus
}

const SubjectLRs = ({
  students,
  subject,
  editable = false,
}: SubjectLRsProps) => {
  const formMethods = useForm()
  const refetch = useRefetch()

  const [create] = useMutation<
    CreateLaboratoryWorkGradeMutation,
    CreateLaboratoryWorkGradeMutationVariables
  >(CREATE_LW)

  const [update] = useMutation<
    UpdateLaboratoryWorkMutation,
    UpdateLaboratoryWorkMutationVariables
  >(UPDATE_LW)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const promises = Object.entries(data).map(([key, grade]) => {
      if (!grade) return Promise.resolve()
      if (key.includes('-')) {
        const [studentId, lrId] = key.split('-')
        return create({
          variables: {
            input: {
              lrId,
              studentId,
              grade,
            },
          },
        })
      }
      if (
        students
          .reduce(
            (acc, student) => [...acc, ...student.LaboratoryWorkGrade],
            [] as LaboratoryWorkGrade[]
          )
          .find((mg) => mg.id === key).grade === grade
      ) {
        return Promise.resolve()
      }
      return update({
        variables: {
          id: key,
          grade: {
            grade: grade,
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
            {subject.LaboratoryWorks.map((lw) => (
              <th
                key={lw.id}
                className="border-r border-gray-500 p-2 last:rounded-tr-md last:border-none"
              >
                <span>{lw.name}</span>
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
                {subject.LaboratoryWorks.map((lw) => {
                  const lg = student.LaboratoryWorkGrade.find(
                    (grade) => grade.lrId === lw.id
                  )
                  const grade = lg?.grade
                  const cur_grade = editable
                    ? formMethods.watch(
                        lg?.id || `${student.id}-${lw.id}`,
                        grade
                      )
                    : grade

                  let img_string: string

                  switch (cur_grade) {
                    case 'Issued':
                      img_string = '/tasks/task_issued.gif'
                      break
                    case 'Done':
                      img_string = '/tasks/task_collected.gif'
                      break
                    case 'Asserted':
                      img_string = '/tasks/task_approved.gif'
                      break
                    case 'AssertedBehind':
                      img_string = '/tasks/task_approved_after.gif'
                      break
                    case 'AssertedAhead':
                      img_string = '/tasks/task_approved_before.gif'
                      break
                    default:
                      break
                  }
                  return (
                    <td
                      key={lw.id + lg?.grade}
                      className="border-r border-gray-500 p-2 last:border-none"
                    >
                      <div className="flex flex-row items-center">
                        {img_string && (
                          <div className="flex-rol flex items-center justify-center">
                            <img src={img_string} alt={lw.name} />
                          </div>
                        )}
                        {editable && (
                          <SelectField
                            name={lg?.id || `${student.id}-${lw.id}`}
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

export default SubjectLRs
