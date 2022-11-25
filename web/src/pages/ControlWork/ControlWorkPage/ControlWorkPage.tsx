import ControlWorkCell from 'src/components/ControlWork/ControlWorkCell'

type ControlWorkPageProps = {
  id: string
}

const ControlWorkPage = ({ id }: ControlWorkPageProps) => {
  return <ControlWorkCell id={id} />
}

export default ControlWorkPage
