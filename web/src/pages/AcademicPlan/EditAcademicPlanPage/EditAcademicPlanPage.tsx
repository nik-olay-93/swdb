import EditAcademicPlanCell from 'src/components/AcademicPlan/EditAcademicPlanCell'

type AcademicPlanPageProps = {
  id: string
}

const EditAcademicPlanPage = ({ id }: AcademicPlanPageProps) => {
  return <EditAcademicPlanCell id={id} />
}

export default EditAcademicPlanPage
