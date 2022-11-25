import type { LaboratoryWork } from '@prisma/client'

import {
  laboratoryWorks,
  laboratoryWork,
  createLaboratoryWork,
  updateLaboratoryWork,
  deleteLaboratoryWork,
} from './laboratoryWorks'
import type { StandardScenario } from './laboratoryWorks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('laboratoryWorks', () => {
  scenario(
    'returns all laboratoryWorks',
    async (scenario: StandardScenario) => {
      const result = await laboratoryWorks()

      expect(result.length).toEqual(Object.keys(scenario.laboratoryWork).length)
    }
  )

  scenario(
    'returns a single laboratoryWork',
    async (scenario: StandardScenario) => {
      const result = await laboratoryWork({
        id: scenario.laboratoryWork.one.id,
      })

      expect(result).toEqual(scenario.laboratoryWork.one)
    }
  )

  scenario('creates a laboratoryWork', async (scenario: StandardScenario) => {
    const result = await createLaboratoryWork({
      input: {
        name: 'String',
        week: 239096,
        updatedAt: '2022-11-24T21:17:57.650Z',
        subjectId: scenario.laboratoryWork.two.subjectId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.week).toEqual(239096)
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:17:57.650Z'))
    expect(result.subjectId).toEqual(scenario.laboratoryWork.two.subjectId)
  })

  scenario('updates a laboratoryWork', async (scenario: StandardScenario) => {
    const original = (await laboratoryWork({
      id: scenario.laboratoryWork.one.id,
    })) as LaboratoryWork
    const result = await updateLaboratoryWork({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a laboratoryWork', async (scenario: StandardScenario) => {
    const original = (await deleteLaboratoryWork({
      id: scenario.laboratoryWork.one.id,
    })) as LaboratoryWork
    const result = await laboratoryWork({ id: original.id })

    expect(result).toEqual(null)
  })
})
