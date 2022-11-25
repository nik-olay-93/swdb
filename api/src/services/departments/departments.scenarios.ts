import type { Prisma, Department } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DepartmentCreateArgs>({
  department: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:16:47.093Z',
        faculty: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:16:47.093Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:16:47.093Z',
        faculty: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:16:47.093Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Department, 'department'>
