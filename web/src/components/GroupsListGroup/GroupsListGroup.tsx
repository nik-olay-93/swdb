import { GroupsListQuery } from 'types/graphql'

export interface GroupsListGroupProps {
  group: GroupsListQuery['faculties'][0]['departments'][0]['groups'][0]
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

const GroupsListGroup = ({
  group,
  selected,
  setSelected,
}: GroupsListGroupProps) => {
  const isSelected = selected === group.id

  return (
    <div
      key={group.id}
      className={`cursor-pointer text-left ${isSelected ? 'bg-blue-200' : ''}`}
      onClick={() => {
        setSelected((p) => (p === group.id ? null : group.id))
      }}
      onKeyDown={(e) => {
        if (e.key == 'Enter')
          setSelected((p) => (p === group.id ? null : group.id))
      }}
      role="menuitem"
      tabIndex={0}
    >
      <span className="text-base font-semibold">{group.name}</span>
    </div>
  )
}

export default GroupsListGroup
