import type {
  QueryResolvers,
  MutationResolvers,
  SemGradeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const semGrades: QueryResolvers['semGrades'] = () => {
  return db.semGrade.findMany()
}

export const semGrade: QueryResolvers['semGrade'] = ({ id }) => {
  return db.semGrade.findUnique({
    where: { id },
  })
}

export const createSemGrade: MutationResolvers['createSemGrade'] = async ({
  input,
}) => {
  const teacherId = context?.currentUser?.id

  const controlWork = await db.seminar.findUnique({
    where: { id: input.seminarId },
    select: {
      subjectId: true,
    },
  })
  const subjectId = controlWork?.subjectId
  const student = await db.student.findUnique({
    where: { id: input.studentId },
    select: {
      groupId: true,
    },
  })
  const groupId = student?.groupId

  const ttg = await db.teacherToGroup.findMany({
    where: {
      teacherId,
      subjectId,
      groupId,
    },
  })

  if (
    context?.currentUser?.roles === 'TEACHER' &&
    (ttg === undefined ||
      ttg.findIndex((t) => t.assignment.some((a) => a === 'Seminar')) === -1)
  ) {
    throw new Error('You are not allowed to create this Seminar grade')
  }

  return db.semGrade.create({
    data: input,
  })
}

export const updateSemGrade: MutationResolvers['updateSemGrade'] = async ({
  id,
  input,
}) => {
  const semGrade = await db.semGrade.findUnique({
    where: { id },
    select: {
      seminar: {
        select: {
          Subject: true,
        },
      },
      student: {
        select: {
          group: true,
        },
      },
    },
  })

  const ttg = await db.teacherToGroup.findMany({
    where: {
      teacherId: context?.currentUser?.id,
      groupId: semGrade?.student.group.id,
      subjectId: semGrade?.seminar.Subject.id,
    },
  })

  if (
    context?.currentUser?.roles === 'TEACHER' &&
    (ttg === undefined ||
      ttg.findIndex((t) => t.assignment.some((a) => a === 'Seminar')) === -1)
  ) {
    throw new Error('You are not allowed to update this Seminar grade')
  }

  return db.semGrade.update({
    data: input,
    where: { id },
  })
}

export const deleteSemGrade: MutationResolvers['deleteSemGrade'] = ({ id }) => {
  return db.semGrade.delete({
    where: { id },
  })
}

export const SemGrade: SemGradeRelationResolvers = {
  student: (_obj, { root }) => {
    return db.semGrade.findUnique({ where: { id: root?.id } }).student()
  },
  seminar: (_obj, { root }) => {
    return db.semGrade.findUnique({ where: { id: root?.id } }).seminar()
  },
}
