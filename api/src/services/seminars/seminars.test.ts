import type { Seminar } from '@prisma/client'

import {
  seminars,
  seminar,
  createSeminar,
  updateSeminar,
  deleteSeminar,
} from './seminars'
import type { StandardScenario } from './seminars.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('seminars', () => {
  scenario('returns all seminars', async (scenario: StandardScenario) => {
    const result = await seminars()

    expect(result.length).toEqual(Object.keys(scenario.seminar).length)
  })

  scenario('returns a single seminar', async (scenario: StandardScenario) => {
    const result = await seminar({ id: scenario.seminar.one.id })

    expect(result).toEqual(scenario.seminar.one)
  })

  scenario('creates a seminar', async (scenario: StandardScenario) => {
    const result = await createSeminar({
      input: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-26T17:55:29.017Z',
        subjectId: scenario.seminar.two.subjectId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2022-11-26T17:55:29.017Z'))
    expect(result.subjectId).toEqual(scenario.seminar.two.subjectId)
  })

  scenario('updates a seminar', async (scenario: StandardScenario) => {
    const original = (await seminar({ id: scenario.seminar.one.id })) as Seminar
    const result = await updateSeminar({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a seminar', async (scenario: StandardScenario) => {
    const original = (await deleteSeminar({
      id: scenario.seminar.one.id,
    })) as Seminar
    const result = await seminar({ id: original.id })

    expect(result).toEqual(null)
  })
})
