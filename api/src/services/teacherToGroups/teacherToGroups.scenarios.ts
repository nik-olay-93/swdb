import type { Prisma, TeacherToGroup } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeacherToGroupCreateArgs>({
  teacherToGroup: {
    one: {
      data: {
        assignment: 'ControlWork',
        updatedAt: '2022-12-05T16:35:00.480Z',
        teacher: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            user: {
              create: {
                email: 'String2178879',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        group: {
          create: {
            name: 'String',
            semester: 4538356,
            updatedAt: '2022-12-05T16:35:00.480Z',
            course: {
              create: {
                name: 'String',
                description: 'String',
                semester: 7367991,
                updatedAt: '2022-12-05T16:35:00.480Z',
                academicPlan: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-12-05T16:35:00.480Z',
                  },
                },
              },
            },
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-12-05T16:35:00.480Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-12-05T16:35:00.480Z',
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
            updatedAt: '2022-12-05T16:35:00.480Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-12-05T16:35:00.480Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-12-05T16:35:00.480Z',
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
        assignment: 'ControlWork',
        updatedAt: '2022-12-05T16:35:00.480Z',
        teacher: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            user: {
              create: {
                email: 'String3417868',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        group: {
          create: {
            name: 'String',
            semester: 5959963,
            updatedAt: '2022-12-05T16:35:00.480Z',
            course: {
              create: {
                name: 'String',
                description: 'String',
                semester: 8367990,
                updatedAt: '2022-12-05T16:35:00.480Z',
                academicPlan: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-12-05T16:35:00.480Z',
                  },
                },
              },
            },
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-12-05T16:35:00.480Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-12-05T16:35:00.480Z',
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
            updatedAt: '2022-12-05T16:35:00.480Z',
            department: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-12-05T16:35:00.480Z',
                faculty: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-12-05T16:35:00.480Z',
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
