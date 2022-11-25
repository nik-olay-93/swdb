import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LaboratoryWorkForm from 'src/components/LaboratoryWork/LaboratoryWorkForm'

import type { CreateLaboratoryWorkInput } from 'types/graphql'

const CREATE_LABORATORY_WORK_MUTATION = gql`
  mutation CreateLaboratoryWorkMutation($input: CreateLaboratoryWorkInput!) {
    createLaboratoryWork(input: $input) {
      id
    }
  }
`

const NewLaboratoryWork = () => {
  const [createLaboratoryWork, { loading, error }] = useMutation(
    CREATE_LABORATORY_WORK_MUTATION,
    {
      onCompleted: () => {
        toast.success('LaboratoryWork created')
        navigate(routes.laboratoryWorks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateLaboratoryWorkInput) => {
    createLaboratoryWork({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New LaboratoryWork</h2>
      </header>
      <div className="rw-segment-main">
        <LaboratoryWorkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLaboratoryWork
