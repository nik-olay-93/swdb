import SemGradeCell from 'src/components/SemGrade/SemGradeCell'

type SemGradePageProps = {
  id: string
}

const SemGradePage = ({ id }: SemGradePageProps) => {
  return <SemGradeCell id={id} />
}

export default SemGradePage
