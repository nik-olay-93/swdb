import EditStudentCell from 'src/components/Student/EditStudentCell'

type StudentPageProps = {
  id: string
}

const EditStudentPage = ({ id }: StudentPageProps) => {
  return <EditStudentCell id={id} />
}

export default EditStudentPage
