import type { Faculty } from '@prisma/client'

import {
  faculties,
  faculty,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} from './faculties'
import type { StandardScenario } from './faculties.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('faculties', () => {
  scenario('returns all faculties', async (scenario: StandardScenario) => {
    const result = await faculties()

    expect(result.length).toEqual(Object.keys(scenario.faculty).length)
  })

  scenario('returns a single faculty', async (scenario: StandardScenario) => {
    const result = await faculty({ id: scenario.faculty.one.id })

    expect(result).toEqual(scenario.faculty.one)
  })

  scenario('creates a faculty', async () => {
    const result = await createFaculty({
      input: {
        name: 'String',
        description: 'String',
        updatedAt: '2022-11-24T21:16:34.898Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2022-11-24T21:16:34.898Z'))
  })

  scenario('updates a faculty', async (scenario: StandardScenario) => {
    const original = (await faculty({ id: scenario.faculty.one.id })) as Faculty
    const result = await updateFaculty({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a faculty', async (scenario: StandardScenario) => {
    const original = (await deleteFaculty({
      id: scenario.faculty.one.id,
    })) as Faculty
    const result = await faculty({ id: original.id })

    expect(result).toEqual(null)
  })
})
