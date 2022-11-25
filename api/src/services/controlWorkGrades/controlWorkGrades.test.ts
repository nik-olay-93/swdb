import type { ControlWorkGrade } from '@prisma/client'

import {
  controlWorkGrades,
  controlWorkGrade,
  createControlWorkGrade,
  updateControlWorkGrade,
  deleteControlWorkGrade,
} from './controlWorkGrades'
import type { StandardScenario } from './controlWorkGrades.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('controlWorkGrades', () => {
  scenario(
    'returns all controlWorkGrades',
    async (scenario: StandardScenario) => {
      const result = await controlWorkGrades()

      expect(result.length).toEqual(
        Object.keys(scenario.controlWorkGrade).length
      )
    }
  )

  scenario(
    'returns a single controlWorkGrade',
    async (scenario: StandardScenario) => {
      const result = await controlWorkGrade({
        id: scenario.controlWorkGrade.one.id,
      })

      expect(result).toEqual(scenario.controlWorkGrade.one)
    }
  )

  scenario('creates a controlWorkGrade', async (scenario: StandardScenario) => {
    const result = await createControlWorkGrade({
      input: {
        studentId: scenario.controlWorkGrade.two.studentId,
        cmId: scenario.controlWorkGrade.two.cmId,
        updatedAt: '2022-11-24T21:18:54.080Z',
      },
    })

    expect(result.studentId).toEqual(scenario.controlWorkGrade.two.studentId)
    expect(result.cmId).toEqual(scenario.controlWorkGrade.two.cmId)
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:18:54.080Z'))
  })

  scenario('updates a controlWorkGrade', async (scenario: StandardScenario) => {
    const original = (await controlWorkGrade({
      id: scenario.controlWorkGrade.one.id,
    })) as ControlWorkGrade
    const result = await updateControlWorkGrade({
      id: original.id,
      input: { updatedAt: '2022-11-25T21:18:54.080Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2022-11-25T21:18:54.080Z'))
  })

  scenario('deletes a controlWorkGrade', async (scenario: StandardScenario) => {
    const original = (await deleteControlWorkGrade({
      id: scenario.controlWorkGrade.one.id,
    })) as ControlWorkGrade
    const result = await controlWorkGrade({ id: original.id })

    expect(result).toEqual(null)
  })
})
