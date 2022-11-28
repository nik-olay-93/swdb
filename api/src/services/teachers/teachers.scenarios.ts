import type { Prisma, Teacher } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeacherCreateArgs>({
  teacher: {
    one: {
      data: {
        name: 'String',
        surname: 'String',
        middlename: 'String',
        user: {
          create: {
            email: 'String8724912',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        surname: 'String',
        middlename: 'String',
        user: {
          create: {
            email: 'String2999939',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Teacher, 'teacher'>
