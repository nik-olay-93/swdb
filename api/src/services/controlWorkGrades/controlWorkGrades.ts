import type {
  QueryResolvers,
  MutationResolvers,
  ControlWorkGradeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const controlWorkGrades: QueryResolvers['controlWorkGrades'] = () => {
  return db.controlWorkGrade.findMany()
}

export const controlWorkGrade: QueryResolvers['controlWorkGrade'] = ({
  id,
}) => {
  return db.controlWorkGrade.findUnique({
    where: { id },
  })
}

export const createControlWorkGrade: MutationResolvers['createControlWorkGrade'] =
  async ({ input }) => {
    const teacherId = context?.currentUser?.id

    const controlWork = await db.controlWork.findUnique({
      where: { id: input.cmId },
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
        ttg.findIndex((t) => t.assignment.some((a) => a === 'ControlWork')) ===
          -1)
    ) {
      throw new Error('You are not allowed to create this LW grade')
    }

    return db.controlWorkGrade.create({
      data: input,
    })
  }

export const updateControlWorkGrade: MutationResolvers['updateControlWorkGrade'] =
  async ({ id, input }) => {
    const role = context?.currentUser?.roles

    const cwg = await db.controlWorkGrade.findUnique({
      where: { id },
      select: {
        cm: {
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
        groupId: cwg.student.group.id,
        subjectId: cwg.cm.Subject.id,
      },
    })

    if (
      role === 'TEACHER' &&
      (ttg === undefined ||
        ttg.findIndex((t) => t.assignment.some((a) => a === 'ControlWork')) ===
          -1)
    ) {
      throw new Error('You are not allowed to update this module grade')
    }

    return db.controlWorkGrade.update({
      data: input,
      where: { id },
    })
  }

export const deleteControlWorkGrade: MutationResolvers['deleteControlWorkGrade'] =
  ({ id }) => {
    return db.controlWorkGrade.delete({
      where: { id },
    })
  }

export const ControlWorkGrade: ControlWorkGradeRelationResolvers = {
  student: (_obj, { root }) => {
    return db.controlWorkGrade.findUnique({ where: { id: root?.id } }).student()
  },
  cm: (_obj, { root }) => {
    return db.controlWorkGrade.findUnique({ where: { id: root?.id } }).cm()
  },
}
