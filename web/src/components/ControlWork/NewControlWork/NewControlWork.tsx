import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ControlWorkForm from 'src/components/ControlWork/ControlWorkForm'

import type { CreateControlWorkInput } from 'types/graphql'

const CREATE_CONTROL_WORK_MUTATION = gql`
  mutation CreateControlWorkMutation($input: CreateControlWorkInput!) {
    createControlWork(input: $input) {
      id
    }
  }
`

const NewControlWork = () => {
  const [createControlWork, { loading, error }] = useMutation(
    CREATE_CONTROL_WORK_MUTATION,
    {
      onCompleted: () => {
        toast.success('ControlWork created')
        navigate(routes.controlWorks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateControlWorkInput) => {
    createControlWork({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ControlWork</h2>
      </header>
      <div className="rw-segment-main">
        <ControlWorkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewControlWork
