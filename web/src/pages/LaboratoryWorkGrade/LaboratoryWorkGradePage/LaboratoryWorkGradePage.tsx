import LaboratoryWorkGradeCell from 'src/components/LaboratoryWorkGrade/LaboratoryWorkGradeCell'

type LaboratoryWorkGradePageProps = {
  id: string
}

const LaboratoryWorkGradePage = ({ id }: LaboratoryWorkGradePageProps) => {
  return <LaboratoryWorkGradeCell id={id} />
}

export default LaboratoryWorkGradePage
