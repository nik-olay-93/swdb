import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SeminarForm from 'src/components/Seminar/SeminarForm'

import type { CreateSeminarInput } from 'types/graphql'

const CREATE_SEMINAR_MUTATION = gql`
  mutation CreateSeminarMutation($input: CreateSeminarInput!) {
    createSeminar(input: $input) {
      id
    }
  }
`

const NewSeminar = () => {
  const [createSeminar, { loading, error }] = useMutation(
    CREATE_SEMINAR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Seminar created')
        navigate(routes.seminars())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateSeminarInput) => {
    createSeminar({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Seminar</h2>
      </header>
      <div className="rw-segment-main">
        <SeminarForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSeminar
