import EditLaboratoryWorkGradeCell from 'src/components/LaboratoryWorkGrade/EditLaboratoryWorkGradeCell'

type LaboratoryWorkGradePageProps = {
  id: string
}

const EditLaboratoryWorkGradePage = ({ id }: LaboratoryWorkGradePageProps) => {
  return <EditLaboratoryWorkGradeCell id={id} />
}

export default EditLaboratoryWorkGradePage
