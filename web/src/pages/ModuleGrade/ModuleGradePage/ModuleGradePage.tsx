import ModuleGradeCell from 'src/components/ModuleGrade/ModuleGradeCell'

type ModuleGradePageProps = {
  id: string
}

const ModuleGradePage = ({ id }: ModuleGradePageProps) => {
  return <ModuleGradeCell id={id} />
}

export default ModuleGradePage
