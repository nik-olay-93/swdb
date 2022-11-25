import type { Prisma, AcademicPlan } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AcademicPlanCreateArgs>({
  academicPlan: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:16:57.227Z',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:16:57.227Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<AcademicPlan, 'academicPlan'>
