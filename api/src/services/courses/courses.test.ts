import type { Course } from '@prisma/client'

import {
  courses,
  course,
  createCourse,
  updateCourse,
  deleteCourse,
} from './courses'
import type { StandardScenario } from './courses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('courses', () => {
  scenario('returns all courses', async (scenario: StandardScenario) => {
    const result = await courses()

    expect(result.length).toEqual(Object.keys(scenario.course).length)
  })

  scenario('returns a single course', async (scenario: StandardScenario) => {
    const result = await course({ id: scenario.course.one.id })

    expect(result).toEqual(scenario.course.one)
  })

  scenario('creates a course', async (scenario: StandardScenario) => {
    const result = await createCourse({
      input: {
        name: 'String',
        description: 'String',
        semester: 3189534,
        academicPlanId: scenario.course.two.academicPlanId,
        updatedAt: '2022-11-24T21:17:06.503Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.semester).toEqual(3189534)
    expect(result.academicPlanId).toEqual(scenario.course.two.academicPlanId)
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:17:06.503Z'))
  })

  scenario('updates a course', async (scenario: StandardScenario) => {
    const original = (await course({ id: scenario.course.one.id })) as Course
    const result = await updateCourse({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a course', async (scenario: StandardScenario) => {
    const original = (await deleteCourse({
      id: scenario.course.one.id,
    })) as Course
    const result = await course({ id: original.id })

    expect(result).toEqual(null)
  })
})
