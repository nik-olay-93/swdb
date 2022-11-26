import type { Module } from '@prisma/client'

import {
  modules,
  module,
  createModule,
  updateModule,
  deleteModule,
} from './modules'
import type { StandardScenario } from './modules.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('modules', () => {
  scenario('returns all modules', async (scenario: StandardScenario) => {
    const result = await modules()

    expect(result.length).toEqual(Object.keys(scenario.module).length)
  })

  scenario('returns a single module', async (scenario: StandardScenario) => {
    const result = await module({ id: scenario.module.one.id })

    expect(result).toEqual(scenario.module.one)
  })

  scenario('creates a module', async (scenario: StandardScenario) => {
    const result = await createModule({
      input: {
        name: 'String',
        minGrade: 6754835,
        okGrade: 3662626,
        goodGrade: 5930945,
        maxGrade: 9128916,
        week: 7459326,
        updatedAt: '2022-11-26T12:42:15.901Z',
        subjectId: scenario.module.two.subjectId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.minGrade).toEqual(6754835)
    expect(result.okGrade).toEqual(3662626)
    expect(result.goodGrade).toEqual(5930945)
    expect(result.maxGrade).toEqual(9128916)
    expect(result.week).toEqual(7459326)
    expect(result.updatedAt).toEqual(new Date('2022-11-26T12:42:15.901Z'))
    expect(result.subjectId).toEqual(scenario.module.two.subjectId)
  })

  scenario('updates a module', async (scenario: StandardScenario) => {
    const original = (await module({ id: scenario.module.one.id })) as Module
    const result = await updateModule({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a module', async (scenario: StandardScenario) => {
    const original = (await deleteModule({
      id: scenario.module.one.id,
    })) as Module
    const result = await module({ id: original.id })

    expect(result).toEqual(null)
  })
})
