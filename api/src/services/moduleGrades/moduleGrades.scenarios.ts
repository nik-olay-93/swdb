import type { Prisma, ModuleGrade } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ModuleGradeCreateArgs>({
  moduleGrade: {
    one: {
      data: {
        grade: 80176,
        updatedAt: '2022-11-24T21:18:42.454Z',
        student: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            tid: 'String',
            updatedAt: '2022-11-24T21:18:42.454Z',
            group: {
              create: {
                name: 'String',
                semester: 4125782,
                updatedAt: '2022-11-24T21:18:42.455Z',
                course: {
                  create: {
                    name: 'String',
                    description: 'String',
                    semester: 7801498,
                    updatedAt: '2022-11-24T21:18:42.455Z',
                    academicPlan: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:42.455Z',
                      },
                    },
                  },
                },
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:42.455Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:42.455Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        module: {
          create: {
            name: 'String',
            minGrade: 5096366,
            okGrade: 4580247,
            goodGrade: 2296765,
            maxGrade: 5517458,
            updatedAt: '2022-11-24T21:18:42.455Z',
            Subject: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:42.455Z',
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:42.455Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:42.455Z',
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
        grade: 2690570,
        updatedAt: '2022-11-24T21:18:42.455Z',
        student: {
          create: {
            name: 'String',
            surname: 'String',
            middlename: 'String',
            tid: 'String',
            updatedAt: '2022-11-24T21:18:42.455Z',
            group: {
              create: {
                name: 'String',
                semester: 941319,
                updatedAt: '2022-11-24T21:18:42.455Z',
                course: {
                  create: {
                    name: 'String',
                    description: 'String',
                    semester: 7583712,
                    updatedAt: '2022-11-24T21:18:42.455Z',
                    academicPlan: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:42.455Z',
                      },
                    },
                  },
                },
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:42.455Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:42.455Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        module: {
          create: {
            name: 'String',
            minGrade: 6071138,
            okGrade: 9668520,
            goodGrade: 1765315,
            maxGrade: 5177549,
            updatedAt: '2022-11-24T21:18:42.455Z',
            Subject: {
              create: {
                name: 'String',
                description: 'String',
                updatedAt: '2022-11-24T21:18:42.455Z',
                department: {
                  create: {
                    name: 'String',
                    description: 'String',
                    updatedAt: '2022-11-24T21:18:42.455Z',
                    faculty: {
                      create: {
                        name: 'String',
                        description: 'String',
                        updatedAt: '2022-11-24T21:18:42.455Z',
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

export type StandardScenario = ScenarioData<ModuleGrade, 'moduleGrade'>
