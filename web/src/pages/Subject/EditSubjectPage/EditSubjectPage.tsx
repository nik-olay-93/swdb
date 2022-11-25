import EditSubjectCell from 'src/components/Subject/EditSubjectCell'

type SubjectPageProps = {
  id: string
}

const EditSubjectPage = ({ id }: SubjectPageProps) => {
  return <EditSubjectCell id={id} />
}

export default EditSubjectPage
