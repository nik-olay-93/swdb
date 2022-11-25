import EditSemGradeCell from 'src/components/SemGrade/EditSemGradeCell'

type SemGradePageProps = {
  id: string
}

const EditSemGradePage = ({ id }: SemGradePageProps) => {
  return <EditSemGradeCell id={id} />
}

export default EditSemGradePage
