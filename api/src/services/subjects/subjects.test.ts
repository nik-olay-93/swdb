import type { Subject } from '@prisma/client'

import {
  subjects,
  subject,
  createSubject,
  updateSubject,
  deleteSubject,
} from './subjects'
import type { StandardScenario } from './subjects.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('subjects', () => {
  scenario('returns all subjects', async (scenario: StandardScenario) => {
    const result = await subjects()

    expect(result.length).toEqual(Object.keys(scenario.subject).length)
  })

  scenario('returns a single subject', async (scenario: StandardScenario) => {
    const result = await subject({ id: scenario.subject.one.id })

    expect(result).toEqual(scenario.subject.one)
  })

  scenario('creates a subject', async (scenario: StandardScenario) => {
    const result = await createSubject({
      input: {
        name: 'String',
        description: 'String',
        departmentId: scenario.subject.two.departmentId,
        updatedAt: '2022-11-26T12:42:01.953Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.departmentId).toEqual(scenario.subject.two.departmentId)
    expect(result.updatedAt).toEqual(new Date('2022-11-26T12:42:01.953Z'))
  })

  scenario('updates a subject', async (scenario: StandardScenario) => {
    const original = (await subject({ id: scenario.subject.one.id })) as Subject
    const result = await updateSubject({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a subject', async (scenario: StandardScenario) => {
    const original = (await deleteSubject({
      id: scenario.subject.one.id,
    })) as Subject
    const result = await subject({ id: original.id })

    expect(result).toEqual(null)
  })
})
