import FacultyCell from 'src/components/Faculty/FacultyCell'

type FacultyPageProps = {
  id: string
}

const FacultyPage = ({ id }: FacultyPageProps) => {
  return <FacultyCell id={id} />
}

export default FacultyPage
