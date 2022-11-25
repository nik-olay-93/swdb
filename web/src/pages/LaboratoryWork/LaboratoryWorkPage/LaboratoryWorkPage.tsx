import LaboratoryWorkCell from 'src/components/LaboratoryWork/LaboratoryWorkCell'

type LaboratoryWorkPageProps = {
  id: string
}

const LaboratoryWorkPage = ({ id }: LaboratoryWorkPageProps) => {
  return <LaboratoryWorkCell id={id} />
}

export default LaboratoryWorkPage
