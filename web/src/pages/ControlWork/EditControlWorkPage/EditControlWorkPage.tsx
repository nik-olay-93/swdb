import EditControlWorkCell from 'src/components/ControlWork/EditControlWorkCell'

type ControlWorkPageProps = {
  id: string
}

const EditControlWorkPage = ({ id }: ControlWorkPageProps) => {
  return <EditControlWorkCell id={id} />
}

export default EditControlWorkPage
