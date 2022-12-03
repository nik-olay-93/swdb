import { useState } from 'react'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { MySubjectsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  groups: MySubjectsQuery['groups']
  subject: MySubjectsQuery['subjects'][0]
  selected: boolean
  setSelected: () => void
}

const TeacherListSubject = ({
  groups,
  selected,
  setSelected,
  subject,
}: Props) => {
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
        <span className="text-xl">{subject.name}</span>
      </div>
      {selected && (
        <div className="ml-4 mt-2 flex flex-col gap-1">
          {groups.length === 0 && (
            <div className="text-md text-gray-500">Нет групп</div>
          )}
          {groups.map((group) => (
            <Link
              key={group.id}
              className={`cursor-pointer rounded-md p-1 text-left text-lg font-semibold transition-colors ${
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
              to={routes.group({ id: group.id })}
            >
              {group.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default TeacherListSubject
