import type { Prisma, Course } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        semester: 6947000,
        updatedAt: '2022-11-24T21:17:06.516Z',
        academicPlan: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:06.516Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        semester: 3364969,
        updatedAt: '2022-11-24T21:17:06.516Z',
        academicPlan: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2022-11-24T21:17:06.516Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Course, 'course'>
