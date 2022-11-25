import EditSeminarCell from 'src/components/Seminar/EditSeminarCell'

type SeminarPageProps = {
  id: string
}

const EditSeminarPage = ({ id }: SeminarPageProps) => {
  return <EditSeminarCell id={id} />
}

export default EditSeminarPage
