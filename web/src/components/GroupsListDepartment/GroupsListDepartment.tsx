import { GroupsListQuery } from 'types/graphql'

export interface GroupsListDepartmentProps {
  department: GroupsListQuery['faculties'][0]['departments'][0]
  selected: boolean
  setSelected: () => void
}

const GroupsListDepartment = ({
  department,
  selected,
  setSelected,
}: GroupsListDepartmentProps) => {
  return (
    <div
      className={`cursor-pointer rounded-md p-1 text-left transition-colors ${
        selected ? 'bg-blue-200' : ''
      }`}
      onClick={() => {
        setSelected()
      }}
      onKeyDown={(e) => {
        if (e.key == 'Enter') setSelected()
      }}
      role="menuitem"
      tabIndex={0}
    >
      <span className="text-md">{department.name}</span>
      <span className="text-xs"> - {department.description}</span>
      {department.groups.map((group) => (
        <div key={group.id} className="cursor-pointer text-left">
          <span className="text-base font-semibold">{group.name}</span>
        </div>
      ))}
    </div>
  )
}

export default GroupsListDepartment
