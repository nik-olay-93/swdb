import type { Prisma, Student } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StudentCreateArgs>({
  student: {
    one: {
      data: {
        name: 'String',
        surname: 'String',
        middlename: 'String',
        tid: 'String',
        updatedAt: '2022-11-24T21:18:30.624Z',
        group: {
          create: {
            name: 'String',
            semester: 6477081,
            updatedAt: '2022-11-24T21:18:30.624Z',
            course: {
              create: {
                name: 'String',
                description: 'String',
                semester: 9987290,
                updatedAt: '2022-11-24T21:18:30.624Z',
                academicPlan: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:30.624Z',
                  },
                },
              },
            },
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:30.624Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:30.624Z',
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
        surname: 'String',
        middlename: 'String',
        tid: 'String',
        updatedAt: '2022-11-24T21:18:30.624Z',
        group: {
          create: {
            name: 'String',
            semester: 1114426,
            updatedAt: '2022-11-24T21:18:30.624Z',
            course: {
              create: {
                name: 'String',
                description: 'String',
                semester: 9683061,
                updatedAt: '2022-11-24T21:18:30.624Z',
                academicPlan: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:30.624Z',
                  },
                },
              },
            },
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:30.624Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:30.624Z',
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

export type StandardScenario = ScenarioData<Student, 'student'>
