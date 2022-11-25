import type { Prisma, Module } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ModuleCreateArgs>({
  module: {
    one: {
      data: {
        name: 'String',
        minGrade: 6766238,
        okGrade: 5767053,
        goodGrade: 5322430,
        maxGrade: 2518363,
        updatedAt: '2022-11-24T21:17:29.380Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:29.380Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:17:29.380Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:17:29.380Z',
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
        minGrade: 596596,
        okGrade: 5725409,
        goodGrade: 5621619,
        maxGrade: 8128644,
        updatedAt: '2022-11-24T21:17:29.380Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:29.380Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:17:29.380Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:17:29.380Z',
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

export type StandardScenario = ScenarioData<Module, 'module'>
