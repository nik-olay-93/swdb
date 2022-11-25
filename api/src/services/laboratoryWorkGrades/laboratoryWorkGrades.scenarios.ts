import type { Prisma, LaboratoryWorkGrade } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LaboratoryWorkGradeCreateArgs>({
  laboratoryWorkGrade: {
    one: {
      data: {
        updatedAt: '2022-11-24T21:19:06.316Z',
        student: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            tid: 'String',
            updatedAt: '2022-11-24T21:19:06.316Z',
            group: {
              create: {
                name: 'String',
                semester: 7427408,
                updatedAt: '2022-11-24T21:19:06.316Z',
                course: {
                  create: {
                    name: 'String',
                    description: 'String',
                    semester: 6418840,
                    updatedAt: '2022-11-24T21:19:06.316Z',
                    academicPlan: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:06.316Z',
                      },
                    },
                  },
                },
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:19:06.316Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:06.316Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        lr: {
          create: {
            name: 'String',
            week: 2674008,
            updatedAt: '2022-11-24T21:19:06.316Z',
            Subject: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:19:06.316Z',
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:19:06.316Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:06.316Z',
                      },
                    },
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
        updatedAt: '2022-11-24T21:19:06.316Z',
        student: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            tid: 'String',
            updatedAt: '2022-11-24T21:19:06.316Z',
            group: {
              create: {
                name: 'String',
                semester: 9427688,
                updatedAt: '2022-11-24T21:19:06.316Z',
                course: {
                  create: {
                    name: 'String',
                    description: 'String',
                    semester: 5093671,
                    updatedAt: '2022-11-24T21:19:06.316Z',
                    academicPlan: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:06.316Z',
                      },
                    },
                  },
                },
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:19:06.316Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:06.316Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        lr: {
          create: {
            name: 'String',
            week: 5563779,
            updatedAt: '2022-11-24T21:19:06.316Z',
            Subject: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:19:06.316Z',
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:19:06.316Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:06.316Z',
                      },
                    },
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

export type StandardScenario = ScenarioData<
  LaboratoryWorkGrade,
  'laboratoryWorkGrade'
>
