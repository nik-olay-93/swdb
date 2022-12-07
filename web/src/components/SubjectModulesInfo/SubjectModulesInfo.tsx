import {
  CreateModuleGradeMutation,
  CreateModuleGradeMutationVariables,
  FindSubjectInfoQuery,
  ModuleGrade,
  UpdateModuleGradeMutation,
  UpdateModuleGradeMutationVariables,
} from 'types/graphql'

import {
  Form,
  Submit,
  SubmitHandler,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { useRefetch } from 'src/lib/RefetchContext'

export interface SubjectModulesProps {
  students: FindSubjectInfoQuery['groupInfo']['students']
  subject: FindSubjectInfoQuery['subjectInfo']
  editable?: boolean
}

const CREATE_MODULE = gql`
  mutation CreateModuleGradeMutation($input: CreateModuleGradeInput!) {
    createModuleGrade(input: $input) {
      id
    }
  }
`

const UPDATE_MODULE = gql`
  mutation UpdateModuleGradeMutation(
    $id: String!
    $grade: UpdateModuleGradeInput!
  ) {
    updateModuleGrade(id: $id, input: $grade) {
      id
    }
  }
`

interface FormValues {
  [key: string]: string
}

const SubjectModules = ({
  students,
  subject,
  editable = false,
}: SubjectModulesProps) => {
  const formMethods = useForm()
  const refetch = useRefetch()

  const [create] = useMutation<
    CreateModuleGradeMutation,
    CreateModuleGradeMutationVariables
  >(CREATE_MODULE)

  const [update] = useMutation<
    UpdateModuleGradeMutation,
    UpdateModuleGradeMutationVariables
  >(UPDATE_MODULE)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const promises = Object.entries(data).map(([key, grade]) => {
      if (!grade) return Promise.resolve()
      if (key.includes('-')) {
        const [studentId, moduleId] = key.split('-')
        return create({
          variables: {
            input: {
              grade: parseInt(grade),
              studentId,
              moduleId,
            },
          },
        })
      }
      if (
        students
          .reduce(
            (acc, student) => [...acc, ...student.ModuleGrade],
            [] as ModuleGrade[]
          )
          .find((mg) => mg.id === key).grade === parseInt(grade)
      ) {
        return Promise.resolve()
      }
      return update({
        variables: {
          id: key,
          grade: {
            grade: parseInt(grade),
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
            {subject.modules.map((module) => (
              <th key={module.id} className="border-r border-gray-500">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <span className="bg-red-400 py-1 pl-2 text-right font-semibold">
                      {module.minGrade}
                    </span>
                    <span className="bg-yellow-400 py-1 pl-2 text-right font-semibold">
                      {module.okGrade}
                    </span>
                    <span className="bg-green-400 py-1 pl-2 text-right font-semibold">
                      {module.goodGrade}
                    </span>
                    <span className="bg-green-600 py-1 pl-2 text-right font-semibold">
                      {module.maxGrade}
                    </span>
                  </div>
                  <span>{module.name}</span>
                  <span className="text-sm font-normal">
                    {module.week}-я неделя
                  </span>
                </div>
              </th>
            ))}
            <th className="rounded-tr-md p-2">Сумма</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            const sum = student.ModuleGrade.filter((mg) =>
              subject.modules.some((m) => m.id === mg.moduleId)
            ).reduce((sum, mg) => sum + mg.grade, 0)
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
                {subject.modules.map((module) => {
                  const mg = student.ModuleGrade.find(
                    (grade) => grade.moduleId === module.id
                  )
                  const grade = mg?.grade
                  return (
                    <td
                      key={module.id}
                      className={`border-r border-gray-500 p-2 text-center ${
                        grade > module.goodGrade
                          ? 'text-green-600'
                          : grade > module.okGrade
                          ? 'text-green-400'
                          : grade > module.minGrade
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}
                    >
                      {editable ? (
                        <TextField
                          name={mg?.id || `${student.id}-${module.id}`}
                          defaultValue={grade}
                          className="w-8 rounded-md text-center"
                          validation={{
                            min: 0,
                            max: module.maxGrade,
                          }}
                          errorClassName="outline-red-400 outline w-8 rounded-md text-center"
                        />
                      ) : (
                        grade
                      )}
                    </td>
                  )
                })}
                <td
                  className={`p-2 text-center ${
                    sum > 84
                      ? 'text-green-600'
                      : sum > 70
                      ? 'text-green-400'
                      : sum > 59
                      ? 'text-yellow-400'
                      : 'text-red-400'
                  }`}
                >
                  {sum}
                </td>
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

export default SubjectModules
