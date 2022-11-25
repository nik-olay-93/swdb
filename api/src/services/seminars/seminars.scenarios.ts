import type { Prisma, Seminar } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SeminarCreateArgs>({
  seminar: {
    one: {
      data: {
        name: 'String',
        week: 3627889,
        updatedAt: '2022-11-24T21:18:08.619Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:18:08.619Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:08.619Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:08.619Z',
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
        week: 3175723,
        updatedAt: '2022-11-24T21:18:08.619Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:18:08.619Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:08.619Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:08.619Z',
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

export type StandardScenario = ScenarioData<Seminar, 'seminar'>
