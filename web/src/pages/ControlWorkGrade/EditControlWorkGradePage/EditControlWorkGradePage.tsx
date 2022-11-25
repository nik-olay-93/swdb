import EditControlWorkGradeCell from 'src/components/ControlWorkGrade/EditControlWorkGradeCell'

type ControlWorkGradePageProps = {
  id: string
}

const EditControlWorkGradePage = ({ id }: ControlWorkGradePageProps) => {
  return <EditControlWorkGradeCell id={id} />
}

export default EditControlWorkGradePage
