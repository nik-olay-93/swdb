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
        minGrade: 2077031,
        okGrade: 4075886,
        goodGrade: 178875,
        maxGrade: 5165467,
        updatedAt: '2022-11-24T21:17:29.366Z',
        subjectId: scenario.module.two.subjectId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.minGrade).toEqual(2077031)
    expect(result.okGrade).toEqual(4075886)
    expect(result.goodGrade).toEqual(178875)
    expect(result.maxGrade).toEqual(5165467)
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:17:29.366Z'))
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
