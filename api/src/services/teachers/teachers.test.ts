import type { Teacher } from '@prisma/client'

import {
  teachers,
  teacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from './teachers'
import type { StandardScenario } from './teachers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('teachers', () => {
  scenario('returns all teachers', async (scenario: StandardScenario) => {
    const result = await teachers()

    expect(result.length).toEqual(Object.keys(scenario.teacher).length)
  })

  scenario('returns a single teacher', async (scenario: StandardScenario) => {
    const result = await teacher({ id: scenario.teacher.one.id })

    expect(result).toEqual(scenario.teacher.one)
  })

  scenario('creates a teacher', async (scenario: StandardScenario) => {
    const result = await createTeacher({
      input: {
        userId: scenario.teacher.two.userId,
        name: 'String',
        surname: 'String',
        middlename: 'String',
      },
    })

    expect(result.userId).toEqual(scenario.teacher.two.userId)
    expect(result.name).toEqual('String')
    expect(result.surname).toEqual('String')
    expect(result.middlename).toEqual('String')
  })

  scenario('updates a teacher', async (scenario: StandardScenario) => {
    const original = (await teacher({ id: scenario.teacher.one.id })) as Teacher
    const result = await updateTeacher({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a teacher', async (scenario: StandardScenario) => {
    const original = (await deleteTeacher({
      id: scenario.teacher.one.id,
    })) as Teacher
    const result = await teacher({ id: original.id })

    expect(result).toEqual(null)
  })
})
