import type { AcademicPlan } from '@prisma/client'

import {
  academicPlans,
  academicPlan,
  createAcademicPlan,
  updateAcademicPlan,
  deleteAcademicPlan,
} from './academicPlans'
import type { StandardScenario } from './academicPlans.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('academicPlans', () => {
  scenario('returns all academicPlans', async (scenario: StandardScenario) => {
    const result = await academicPlans()

    expect(result.length).toEqual(Object.keys(scenario.academicPlan).length)
  })

  scenario(
    'returns a single academicPlan',
    async (scenario: StandardScenario) => {
      const result = await academicPlan({ id: scenario.academicPlan.one.id })

      expect(result).toEqual(scenario.academicPlan.one)
    }
  )

  scenario('creates a academicPlan', async () => {
    const result = await createAcademicPlan({
      input: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:16:57.213Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:16:57.213Z'))
  })

  scenario('updates a academicPlan', async (scenario: StandardScenario) => {
    const original = (await academicPlan({
      id: scenario.academicPlan.one.id,
    })) as AcademicPlan
    const result = await updateAcademicPlan({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a academicPlan', async (scenario: StandardScenario) => {
    const original = (await deleteAcademicPlan({
      id: scenario.academicPlan.one.id,
    })) as AcademicPlan
    const result = await academicPlan({ id: original.id })

    expect(result).toEqual(null)
  })
})
