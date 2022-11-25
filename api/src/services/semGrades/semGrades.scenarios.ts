import type { Prisma, SemGrade } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SemGradeCreateArgs>({
  semGrade: {
    one: {
      data: {
        updatedAt: '2022-11-24T21:19:23.524Z',
        student: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            tid: 'String',
            updatedAt: '2022-11-24T21:19:23.524Z',
            group: {
              create: {
                name: 'String',
                semester: 4350017,
                updatedAt: '2022-11-24T21:19:23.524Z',
                course: {
                  create: {
                    name: 'String',
                    description: 'String',
                    semester: 6272982,
                    updatedAt: '2022-11-24T21:19:23.524Z',
                    academicPlan: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:23.524Z',
                      },
                    },
                  },
                },
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:19:23.524Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:23.524Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        seminar: {
          create: {
            name: 'String',
            week: 7119418,
            updatedAt: '2022-11-24T21:19:23.524Z',
            Subject: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:19:23.524Z',
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:19:23.524Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:23.524Z',
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
        updatedAt: '2022-11-24T21:19:23.524Z',
        student: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            tid: 'String',
            updatedAt: '2022-11-24T21:19:23.524Z',
            group: {
              create: {
                name: 'String',
                semester: 4625279,
                updatedAt: '2022-11-24T21:19:23.524Z',
                course: {
                  create: {
                    name: 'String',
                    description: 'String',
                    semester: 6195079,
                    updatedAt: '2022-11-24T21:19:23.525Z',
                    academicPlan: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:23.525Z',
                      },
                    },
                  },
                },
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:19:23.525Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:23.525Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        seminar: {
          create: {
            name: 'String',
            week: 8026388,
            updatedAt: '2022-11-24T21:19:23.525Z',
            Subject: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:19:23.525Z',
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:19:23.525Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:19:23.525Z',
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

export type StandardScenario = ScenarioData<SemGrade, 'semGrade'>
