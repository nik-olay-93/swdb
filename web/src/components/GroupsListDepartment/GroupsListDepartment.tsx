import { useState } from 'react'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GroupsListQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

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
  const parentRef = useAutoAnimate({})
  const [selectedGroup, setSelectedGroup] = useState<string>(null)

  return (
    <div
      className={`cursor-pointer rounded-md p-1 text-left transition-colors ${
        selected && selectedGroup === null ? 'bg-blue-200' : ''
      }`}
      ref={parentRef as React.RefObject<HTMLDivElement>}
    >
      <div
        onClick={() => {
          if (selectedGroup !== null) setSelectedGroup(null)
          setSelected()
        }}
        onKeyDown={(e) => {
          if (e.key == 'Enter') setSelected()
        }}
        role="menuitem"
        tabIndex={0}
      >
        <span className="text-md">{department.name}</span>
        <span className="text-md font-light"> - {department.description}</span>
      </div>
      {selected && (
        <div className="ml-4 mt-2">
          {department.groups.length === 0 && (
            <div className="text-md text-gray-500">Нет групп</div>
          )}
          {department.groups.map((group) => (
            <div
              key={group.id}
              className={`cursor-pointer rounded-md p-1 text-left transition-colors ${
                selectedGroup === group.id ? 'bg-blue-200' : ''
              }`}
              onClick={() => {
                setSelectedGroup((p) => (p === group.id ? null : group.id))
              }}
              onKeyDown={(e) => {
                if (e.key == 'Enter')
                  setSelectedGroup((p) => (p === group.id ? null : group.id))
              }}
              role="menuitem"
              tabIndex={0}
            >
              <Link
                to={routes.group({ id: group.id })}
                className="text-md font-semibold"
              >
                {group.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default GroupsListDepartment
