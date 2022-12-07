import { useState } from 'react'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GroupsListQuery } from 'types/graphql'

import GroupsListDepartment from './GroupsListDepartment'

export interface GroupsListFacultyProps {
  faculty: GroupsListQuery['faculties'][0]
  selected: boolean
  setSelected: () => void
}

const GroupsListFaculty = ({
  faculty,
  selected,
  setSelected,
}: GroupsListFacultyProps) => {
  const parentRef = useAutoAnimate({})
  const [selectedDepartment, setSelectedDepartment] = useState<string>(null)

  return (
    <div
      key={faculty.id}
      className={`cursor-pointer rounded-md p-2 text-left transition-colors ${
        selected && selectedDepartment === null ? 'bg-blue-200' : ''
      }`}
      ref={parentRef as React.RefObject<HTMLDivElement>}
    >
      <div
        onClick={() => {
          if (selectedDepartment !== null) setSelectedDepartment(null)
          setSelected()
        }}
        onKeyDown={(e) => {
          if (e.key == 'Enter') setSelected()
        }}
        role="menuitem"
        tabIndex={0}
      >
        <span className="text-xl font-semibold">{faculty.name}</span>
        <span className="text-md"> - {faculty.description}</span>
      </div>
      {selected && (
        <div className="ml-4 mt-2">
          {faculty.departments.length === 0 && (
            <div className="text-sm text-gray-500">Нет кафедр</div>
          )}
          {faculty.departments.map((department) => (
            <GroupsListDepartment
              key={department.id}
              department={department}
              selected={selectedDepartment === department.id}
              setSelected={() =>
                setSelectedDepartment(
                  selectedDepartment === department.id ? null : department.id
                )
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GroupsListFaculty
