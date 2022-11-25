import type { Student } from '@prisma/client'

import {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
} from './students'
import type { StandardScenario } from './students.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('students', () => {
  scenario('returns all students', async (scenario: StandardScenario) => {
    const result = await students()

    expect(result.length).toEqual(Object.keys(scenario.student).length)
  })

  scenario('returns a single student', async (scenario: StandardScenario) => {
    const result = await student({ id: scenario.student.one.id })

    expect(result).toEqual(scenario.student.one)
  })

  scenario('creates a student', async (scenario: StandardScenario) => {
    const result = await createStudent({
      input: {
        name: 'String',
        surname: 'String',
        middlename: 'String',
        tid: 'String',
        updatedAt: '2022-11-24T21:18:30.610Z',
        groupId: scenario.student.two.groupId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.surname).toEqual('String')
    expect(result.middlename).toEqual('String')
    expect(result.tid).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:18:30.610Z'))
    expect(result.groupId).toEqual(scenario.student.two.groupId)
  })

  scenario('updates a student', async (scenario: StandardScenario) => {
    const original = (await student({ id: scenario.student.one.id })) as Student
    const result = await updateStudent({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a student', async (scenario: StandardScenario) => {
    const original = (await deleteStudent({
      id: scenario.student.one.id,
    })) as Student
    const result = await student({ id: original.id })

    expect(result).toEqual(null)
  })
})
