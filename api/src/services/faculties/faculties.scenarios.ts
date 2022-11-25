import type { Prisma, Faculty } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FacultyCreateArgs>({
  faculty: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:16:34.910Z',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:16:34.910Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Faculty, 'faculty'>
