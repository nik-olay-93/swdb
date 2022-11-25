import type { LaboratoryWorkGrade } from '@prisma/client'

import {
  laboratoryWorkGrades,
  laboratoryWorkGrade,
  createLaboratoryWorkGrade,
  updateLaboratoryWorkGrade,
  deleteLaboratoryWorkGrade,
} from './laboratoryWorkGrades'
import type { StandardScenario } from './laboratoryWorkGrades.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('laboratoryWorkGrades', () => {
  scenario(
    'returns all laboratoryWorkGrades',
    async (scenario: StandardScenario) => {
      const result = await laboratoryWorkGrades()

      expect(result.length).toEqual(
        Object.keys(scenario.laboratoryWorkGrade).length
      )
    }
  )

  scenario(
    'returns a single laboratoryWorkGrade',
    async (scenario: StandardScenario) => {
      const result = await laboratoryWorkGrade({
        id: scenario.laboratoryWorkGrade.one.id,
      })

      expect(result).toEqual(scenario.laboratoryWorkGrade.one)
    }
  )

  scenario(
    'creates a laboratoryWorkGrade',
    async (scenario: StandardScenario) => {
      const result = await createLaboratoryWorkGrade({
        input: {
          studentId: scenario.laboratoryWorkGrade.two.studentId,
          lrId: scenario.laboratoryWorkGrade.two.lrId,
          updatedAt: '2022-11-24T21:19:06.292Z',
        },
      })

      expect(result.studentId).toEqual(
        scenario.laboratoryWorkGrade.two.studentId
      )
      expect(result.lrId).toEqual(scenario.laboratoryWorkGrade.two.lrId)
      expect(result.updatedAt).toEqual(new Date('2022-11-24T21:19:06.292Z'))
    }
  )

  scenario(
    'updates a laboratoryWorkGrade',
    async (scenario: StandardScenario) => {
      const original = (await laboratoryWorkGrade({
        id: scenario.laboratoryWorkGrade.one.id,
      })) as LaboratoryWorkGrade
      const result = await updateLaboratoryWorkGrade({
        id: original.id,
        input: { updatedAt: '2022-11-25T21:19:06.292Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2022-11-25T21:19:06.292Z'))
    }
  )

  scenario(
    'deletes a laboratoryWorkGrade',
    async (scenario: StandardScenario) => {
      const original = (await deleteLaboratoryWorkGrade({
        id: scenario.laboratoryWorkGrade.one.id,
      })) as LaboratoryWorkGrade
      const result = await laboratoryWorkGrade({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
