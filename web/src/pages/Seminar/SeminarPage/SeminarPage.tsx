import SeminarCell from 'src/components/Seminar/SeminarCell'

type SeminarPageProps = {
  id: string
}

const SeminarPage = ({ id }: SeminarPageProps) => {
  return <SeminarCell id={id} />
}

export default SeminarPage
