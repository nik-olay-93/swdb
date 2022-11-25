import type { Prisma, ControlWork } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ControlWorkCreateArgs>({
  controlWork: {
    one: {
      data: {
        name: 'String',
        week: 1283064,
        updatedAt: '2022-11-24T21:17:41.815Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:41.815Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:17:41.815Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:17:41.815Z',
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
        week: 8550007,
        updatedAt: '2022-11-24T21:17:41.815Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:41.815Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:17:41.815Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:17:41.815Z',
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

export type StandardScenario = ScenarioData<ControlWork, 'controlWork'>
