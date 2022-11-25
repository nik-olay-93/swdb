import type { Prisma, LaboratoryWork } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LaboratoryWorkCreateArgs>({
  laboratoryWork: {
    one: {
      data: {
        name: 'String',
        week: 2903754,
        updatedAt: '2022-11-24T21:17:57.663Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:57.663Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:17:57.663Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:17:57.663Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        week: 971590,
        updatedAt: '2022-11-24T21:17:57.663Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:57.663Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:17:57.663Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:17:57.663Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<LaboratoryWork, 'laboratoryWork'>
