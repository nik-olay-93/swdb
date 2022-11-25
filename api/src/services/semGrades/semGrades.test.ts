import type { SemGrade } from '@prisma/client'

import {
  semGrades,
  semGrade,
  createSemGrade,
  updateSemGrade,
  deleteSemGrade,
} from './semGrades'
import type { StandardScenario } from './semGrades.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('semGrades', () => {
  scenario('returns all semGrades', async (scenario: StandardScenario) => {
    const result = await semGrades()

    expect(result.length).toEqual(Object.keys(scenario.semGrade).length)
  })

  scenario('returns a single semGrade', async (scenario: StandardScenario) => {
    const result = await semGrade({ id: scenario.semGrade.one.id })

    expect(result).toEqual(scenario.semGrade.one)
  })

  scenario('creates a semGrade', async (scenario: StandardScenario) => {
    const result = await createSemGrade({
      input: {
        studentId: scenario.semGrade.two.studentId,
        seminarId: scenario.semGrade.two.seminarId,
        updatedAt: '2022-11-24T21:19:23.511Z',
      },
    })

    expect(result.studentId).toEqual(scenario.semGrade.two.studentId)
    expect(result.seminarId).toEqual(scenario.semGrade.two.seminarId)
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:19:23.511Z'))
  })

  scenario('updates a semGrade', async (scenario: StandardScenario) => {
    const original = (await semGrade({
      id: scenario.semGrade.one.id,
    })) as SemGrade
    const result = await updateSemGrade({
      id: original.id,
      input: { updatedAt: '2022-11-25T21:19:23.511Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2022-11-25T21:19:23.511Z'))
  })

  scenario('deletes a semGrade', async (scenario: StandardScenario) => {
    const original = (await deleteSemGrade({
      id: scenario.semGrade.one.id,
    })) as SemGrade
    const result = await semGrade({ id: original.id })

    expect(result).toEqual(null)
  })
})
