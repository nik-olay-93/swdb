import EditModuleGradeCell from 'src/components/ModuleGrade/EditModuleGradeCell'

type ModuleGradePageProps = {
  id: string
}

const EditModuleGradePage = ({ id }: ModuleGradePageProps) => {
  return <EditModuleGradeCell id={id} />
}

export default EditModuleGradePage
