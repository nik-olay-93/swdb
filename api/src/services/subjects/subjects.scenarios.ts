import type { Prisma, Subject } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SubjectCreateArgs>({
  subject: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:17:15.561Z',
        department: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:15.561Z',
            faculty: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:17:15.561Z',
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
        updatedAt: '2022-11-24T21:17:15.561Z',
        department: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:15.561Z',
            faculty: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:17:15.561Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Subject, 'subject'>
