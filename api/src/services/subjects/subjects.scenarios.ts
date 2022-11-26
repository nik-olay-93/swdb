import type { Prisma, Subject } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SubjectCreateArgs>({
  subject: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-26T12:42:02.011Z',
        department: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-26T12:42:02.011Z',
            faculty: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-26T12:42:02.011Z',
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
        updatedAt: '2022-11-26T12:42:02.011Z',
        department: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-26T12:42:02.011Z',
            faculty: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-26T12:42:02.011Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Subject, 'subject'>
