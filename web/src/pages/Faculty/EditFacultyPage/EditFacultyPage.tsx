import EditFacultyCell from 'src/components/Faculty/EditFacultyCell'

type FacultyPageProps = {
  id: string
}

const EditFacultyPage = ({ id }: FacultyPageProps) => {
  return <EditFacultyCell id={id} />
}

export default EditFacultyPage
