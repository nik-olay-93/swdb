import type { ControlWork } from '@prisma/client'

import {
  controlWorks,
  controlWork,
  createControlWork,
  updateControlWork,
  deleteControlWork,
} from './controlWorks'
import type { StandardScenario } from './controlWorks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('controlWorks', () => {
  scenario('returns all controlWorks', async (scenario: StandardScenario) => {
    const result = await controlWorks()

    expect(result.length).toEqual(Object.keys(scenario.controlWork).length)
  })

  scenario(
    'returns a single controlWork',
    async (scenario: StandardScenario) => {
      const result = await controlWork({ id: scenario.controlWork.one.id })

      expect(result).toEqual(scenario.controlWork.one)
    }
  )

  scenario('creates a controlWork', async (scenario: StandardScenario) => {
    const result = await createControlWork({
      input: {
        name: 'String',
        week: 9863496,
        updatedAt: '2022-11-24T21:17:41.801Z',
        subjectId: scenario.controlWork.two.subjectId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.week).toEqual(9863496)
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:17:41.801Z'))
    expect(result.subjectId).toEqual(scenario.controlWork.two.subjectId)
  })

  scenario('updates a controlWork', async (scenario: StandardScenario) => {
    const original = (await controlWork({
      id: scenario.controlWork.one.id,
    })) as ControlWork
    const result = await updateControlWork({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a controlWork', async (scenario: StandardScenario) => {
    const original = (await deleteControlWork({
      id: scenario.controlWork.one.id,
    })) as ControlWork
    const result = await controlWork({ id: original.id })

    expect(result).toEqual(null)
  })
})
