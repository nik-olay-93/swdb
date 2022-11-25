import ControlWorkGradeCell from 'src/components/ControlWorkGrade/ControlWorkGradeCell'

type ControlWorkGradePageProps = {
  id: string
}

const ControlWorkGradePage = ({ id }: ControlWorkGradePageProps) => {
  return <ControlWorkGradeCell id={id} />
}

export default ControlWorkGradePage
