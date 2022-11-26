import GroupsListCell from 'src/components/GroupsListCell'

type GroupsMenuLayoutProps = {
  children?: React.ReactNode
}

const GroupsMenuLayout = ({ children }: GroupsMenuLayoutProps) => {
  return (
    <div className="flex flex-row justify-center gap-2 p-2">
      <div className="w-[20rem] rounded-md bg-gray-200 p-2">
        <h1 className="mb-2 text-2xl font-bold">Список групп</h1>
        <GroupsListCell />
      </div>
      <div className="flex min-w-[70vw] items-start justify-start">
        {children}
      </div>
    </div>
  )
}

export default GroupsMenuLayout
