import type { Prisma, Module } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ModuleCreateArgs>({
  module: {
    one: {
      data: {
        name: 'String',
        minGrade: 4200275,
        okGrade: 3765890,
        goodGrade: 223262,
        maxGrade: 9251512,
        week: 5609224,
        updatedAt: '2022-11-26T12:42:16.000Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-26T12:42:16.000Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-26T12:42:16.000Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-26T12:42:16.000Z',
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
        minGrade: 9267623,
        okGrade: 7883109,
        goodGrade: 7251719,
        maxGrade: 4768410,
        week: 4046678,
        updatedAt: '2022-11-26T12:42:16.000Z',
        Subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-26T12:42:16.000Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-26T12:42:16.000Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-26T12:42:16.000Z',
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
