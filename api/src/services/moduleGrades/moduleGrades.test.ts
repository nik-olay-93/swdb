import type { ModuleGrade } from '@prisma/client'

import {
  moduleGrades,
  moduleGrade,
  createModuleGrade,
  updateModuleGrade,
  deleteModuleGrade,
} from './moduleGrades'
import type { StandardScenario } from './moduleGrades.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('moduleGrades', () => {
  scenario('returns all moduleGrades', async (scenario: StandardScenario) => {
    const result = await moduleGrades()

    expect(result.length).toEqual(Object.keys(scenario.moduleGrade).length)
  })

  scenario(
    'returns a single moduleGrade',
    async (scenario: StandardScenario) => {
      const result = await moduleGrade({ id: scenario.moduleGrade.one.id })

      expect(result).toEqual(scenario.moduleGrade.one)
    }
  )

  scenario('creates a moduleGrade', async (scenario: StandardScenario) => {
    const result = await createModuleGrade({
      input: {
        grade: 248983,
        updatedAt: '2022-11-24T21:18:42.441Z',
        studentId: scenario.moduleGrade.two.studentId,
        moduleId: scenario.moduleGrade.two.moduleId,
      },
    })

    expect(result.grade).toEqual(248983)
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:18:42.441Z'))
    expect(result.studentId).toEqual(scenario.moduleGrade.two.studentId)
    expect(result.moduleId).toEqual(scenario.moduleGrade.two.moduleId)
  })

  scenario('updates a moduleGrade', async (scenario: StandardScenario) => {
    const original = (await moduleGrade({
      id: scenario.moduleGrade.one.id,
    })) as ModuleGrade
    const result = await updateModuleGrade({
      id: original.id,
      input: { grade: 2504476 },
    })

    expect(result.grade).toEqual(2504476)
  })

  scenario('deletes a moduleGrade', async (scenario: StandardScenario) => {
    const original = (await deleteModuleGrade({
      id: scenario.moduleGrade.one.id,
    })) as ModuleGrade
    const result = await moduleGrade({ id: original.id })

    expect(result).toEqual(null)
  })
})
