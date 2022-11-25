import type { Group } from '@prisma/client'

import { groups, group, createGroup, updateGroup, deleteGroup } from './groups'
import type { StandardScenario } from './groups.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('groups', () => {
  scenario('returns all groups', async (scenario: StandardScenario) => {
    const result = await groups()

    expect(result.length).toEqual(Object.keys(scenario.group).length)
  })

  scenario('returns a single group', async (scenario: StandardScenario) => {
    const result = await group({ id: scenario.group.one.id })

    expect(result).toEqual(scenario.group.one)
  })

  scenario('creates a group', async (scenario: StandardScenario) => {
    const result = await createGroup({
      input: {
        name: 'String',
        courseId: scenario.group.two.courseId,
        semester: 6432628,
        updatedAt: '2022-11-24T21:18:19.604Z',
        departmentId: scenario.group.two.departmentId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.courseId).toEqual(scenario.group.two.courseId)
    expect(result.semester).toEqual(6432628)
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:18:19.604Z'))
    expect(result.departmentId).toEqual(scenario.group.two.departmentId)
  })

  scenario('updates a group', async (scenario: StandardScenario) => {
    const original = (await group({ id: scenario.group.one.id })) as Group
    const result = await updateGroup({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a group', async (scenario: StandardScenario) => {
    const original = (await deleteGroup({ id: scenario.group.one.id })) as Group
    const result = await group({ id: original.id })

    expect(result).toEqual(null)
  })
})
