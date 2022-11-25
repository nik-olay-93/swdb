import type { Prisma, Group } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GroupCreateArgs>({
  group: {
    one: {
      data: {
        name: 'String',
        semester: 156465,
        updatedAt: '2022-11-24T21:18:19.616Z',
        course: {
          create: {
            name: 'String',
            description: 'String',
            semester: 1874369,
            updatedAt: '2022-11-24T21:18:19.616Z',
            academicPlan: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:19.616Z',
              },
            },
          },
        },
        department: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:18:19.616Z',
            faculty: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:19.616Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        semester: 946723,
        updatedAt: '2022-11-24T21:18:19.616Z',
        course: {
          create: {
            name: 'String',
            description: 'String',
            semester: 581857,
            updatedAt: '2022-11-24T21:18:19.616Z',
            academicPlan: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:19.616Z',
              },
            },
          },
        },
        department: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:18:19.616Z',
            faculty: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:19.616Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Group, 'group'>
