import type { Prisma, TeacherToGroup } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeacherToGroupCreateArgs>({
  teacherToGroup: {
    one: {
      data: {
        updatedAt: '2022-11-28T13:04:43.232Z',
        teacher: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            user: {
              create: {
                email: 'String4828421',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        group: {
          create: {
            name: 'String',
            semester: 4817463,
            updatedAt: '2022-11-28T13:04:43.232Z',
            course: {
              create: {
                name: 'String',
                description: 'String',
                semester: 4939674,
                updatedAt: '2022-11-28T13:04:43.232Z',
                academicPlan: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-28T13:04:43.232Z',
                  },
                },
              },
            },
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-28T13:04:43.232Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-28T13:04:43.232Z',
                  },
                },
              },
            },
          },
        },
        subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-28T13:04:43.232Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-28T13:04:43.232Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-28T13:04:43.232Z',
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
        updatedAt: '2022-11-28T13:04:43.232Z',
        teacher: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            user: {
              create: {
                email: 'String5777721',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        group: {
          create: {
            name: 'String',
            semester: 7131481,
            updatedAt: '2022-11-28T13:04:43.232Z',
            course: {
              create: {
                name: 'String',
                description: 'String',
                semester: 922333,
                updatedAt: '2022-11-28T13:04:43.232Z',
                academicPlan: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-28T13:04:43.232Z',
                  },
                },
              },
            },
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-28T13:04:43.232Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-28T13:04:43.232Z',
                  },
                },
              },
            },
          },
        },
        subject: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-28T13:04:43.232Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-28T13:04:43.232Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-28T13:04:43.232Z',
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

export type StandardScenario = ScenarioData<TeacherToGroup, 'teacherToGroup'>
