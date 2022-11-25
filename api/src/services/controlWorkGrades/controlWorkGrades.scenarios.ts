import type { Prisma, ControlWorkGrade } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ControlWorkGradeCreateArgs>({
  controlWorkGrade: {
    one: {
      data: {
        updatedAt: '2022-11-24T21:18:54.093Z',
        student: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            tid: 'String',
            updatedAt: '2022-11-24T21:18:54.093Z',
            group: {
              create: {
                name: 'String',
                semester: 1883818,
                updatedAt: '2022-11-24T21:18:54.093Z',
                course: {
                  create: {
                    name: 'String',
                    description: 'String',
                    semester: 5863940,
                    updatedAt: '2022-11-24T21:18:54.093Z',
                    academicPlan: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:54.093Z',
                      },
                    },
                  },
                },
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:54.093Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:54.093Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        cm: {
          create: {
            name: 'String',
            week: 1250987,
            updatedAt: '2022-11-24T21:18:54.093Z',
            Subject: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:54.093Z',
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:54.093Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:54.093Z',
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
        updatedAt: '2022-11-24T21:18:54.093Z',
        student: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            tid: 'String',
            updatedAt: '2022-11-24T21:18:54.093Z',
            group: {
              create: {
                name: 'String',
                semester: 9464236,
                updatedAt: '2022-11-24T21:18:54.093Z',
                course: {
                  create: {
                    name: 'String',
                    description: 'String',
                    semester: 3013458,
                    updatedAt: '2022-11-24T21:18:54.093Z',
                    academicPlan: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:54.093Z',
                      },
                    },
                  },
                },
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:54.093Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:54.093Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        cm: {
          create: {
            name: 'String',
            week: 2838747,
            updatedAt: '2022-11-24T21:18:54.093Z',
            Subject: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:54.093Z',
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:54.093Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:54.093Z',
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
  ControlWorkGrade,
  'controlWorkGrade'
>
