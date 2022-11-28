import { useState } from 'react'

import { GroupsListQuery } from 'types/graphql'

import GroupsListFaculty from './GroupsListFaculty'

export interface GroupsListProps {
  faculties: GroupsListQuery['faculties']
}

const GroupsList = ({ faculties }: GroupsListProps) => {
  const [selectedFaculty, setSelectedFaculty] = useState<string>(null)

  return (
    <div className="flex flex-col">
      {faculties.map((faculty) => (
        <GroupsListFaculty
          key={faculty.id}
          faculty={faculty}
          selected={selectedFaculty === faculty.id}
          setSelected={() =>
            setSelectedFaculty(
              selectedFaculty === faculty.id ? null : faculty.id
            )
          }
        />
      ))}
    </div>
  )
}

export default GroupsList
