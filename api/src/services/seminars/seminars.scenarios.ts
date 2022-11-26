import type { Prisma, Seminar } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SeminarCreateArgs>({
  seminar: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-26T17:55:29.115Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-26T17:55:29.115Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-26T17:55:29.115Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-26T17:55:29.115Z',
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
        description: 'String',
        updatedAt: '2022-11-26T17:55:29.115Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-26T17:55:29.115Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-26T17:55:29.115Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-26T17:55:29.115Z',
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
