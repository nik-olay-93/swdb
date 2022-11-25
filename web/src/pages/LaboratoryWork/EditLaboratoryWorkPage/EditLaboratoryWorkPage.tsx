import EditLaboratoryWorkCell from 'src/components/LaboratoryWork/EditLaboratoryWorkCell'

type LaboratoryWorkPageProps = {
  id: string
}

const EditLaboratoryWorkPage = ({ id }: LaboratoryWorkPageProps) => {
  return <EditLaboratoryWorkCell id={id} />
}

export default EditLaboratoryWorkPage
