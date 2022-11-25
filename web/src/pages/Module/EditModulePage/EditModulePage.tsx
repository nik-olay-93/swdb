import EditModuleCell from 'src/components/Module/EditModuleCell'

type ModulePageProps = {
  id: string
}

const EditModulePage = ({ id }: ModulePageProps) => {
  return <EditModuleCell id={id} />
}

export default EditModulePage
