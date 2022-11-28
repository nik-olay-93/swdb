import type { TeacherToGroup } from '@prisma/client'

import {
  teacherToGroups,
  teacherToGroup,
  createTeacherToGroup,
  updateTeacherToGroup,
  deleteTeacherToGroup,
} from './teacherToGroups'
import type { StandardScenario } from './teacherToGroups.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('teacherToGroups', () => {
  scenario(
    'returns all teacherToGroups',
    async (scenario: StandardScenario) => {
      const result = await teacherToGroups()

      expect(result.length).toEqual(Object.keys(scenario.teacherToGroup).length)
    }
  )

  scenario(
    'returns a single teacherToGroup',
    async (scenario: StandardScenario) => {
      const result = await teacherToGroup({
        id: scenario.teacherToGroup.one.id,
      })

      expect(result).toEqual(scenario.teacherToGroup.one)
    }
  )

  scenario('creates a teacherToGroup', async (scenario: StandardScenario) => {
    const result = await createTeacherToGroup({
      input: {
        teacherId: scenario.teacherToGroup.two.teacherId,
        groupId: scenario.teacherToGroup.two.groupId,
        subjectId: scenario.teacherToGroup.two.subjectId,
        updatedAt: '2022-11-28T13:04:43.010Z',
      },
    })

    expect(result.teacherId).toEqual(scenario.teacherToGroup.two.teacherId)
    expect(result.groupId).toEqual(scenario.teacherToGroup.two.groupId)
    expect(result.subjectId).toEqual(scenario.teacherToGroup.two.subjectId)
    expect(result.updatedAt).toEqual(new Date('2022-11-28T13:04:43.010Z'))
  })

  scenario('updates a teacherToGroup', async (scenario: StandardScenario) => {
    const original = (await teacherToGroup({
      id: scenario.teacherToGroup.one.id,
    })) as TeacherToGroup
    const result = await updateTeacherToGroup({
      id: original.id,
      input: { updatedAt: '2022-11-29T13:04:43.010Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2022-11-29T13:04:43.010Z'))
  })

  scenario('deletes a teacherToGroup', async (scenario: StandardScenario) => {
    const original = (await deleteTeacherToGroup({
      id: scenario.teacherToGroup.one.id,
    })) as TeacherToGroup
    const result = await teacherToGroup({ id: original.id })

    expect(result).toEqual(null)
  })
})
