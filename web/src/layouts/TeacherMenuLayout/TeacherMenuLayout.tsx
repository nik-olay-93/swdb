import TeacherListCell from 'src/components/TeacherCell'

type TeacherMenuLayoutProps = {
  children?: React.ReactNode
}

const TeacherMenuLayout = ({ children }: TeacherMenuLayoutProps) => {
  return (
    <div className="flex flex-row justify-center gap-2 p-2">
      <div className="mb-auto w-[20rem] rounded-md bg-gray-200 p-2">
        <h1 className="mb-2 text-2xl font-bold">Список групп</h1>
        <TeacherListCell />
      </div>
      <div className="flex min-w-[70vw] items-start justify-start">
        {children}
      </div>
    </div>
  )
}

export default TeacherMenuLayout
