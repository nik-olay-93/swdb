import AcademicPlanCell from 'src/components/AcademicPlan/AcademicPlanCell'

type AcademicPlanPageProps = {
  id: string
}

const AcademicPlanPage = ({ id }: AcademicPlanPageProps) => {
  return <AcademicPlanCell id={id} />
}

export default AcademicPlanPage
