import type {
  QueryResolvers,
  MutationResolvers,
  LaboratoryWorkGradeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const laboratoryWorkGrades: QueryResolvers['laboratoryWorkGrades'] =
  () => {
    return db.laboratoryWorkGrade.findMany()
  }

export const laboratoryWorkGrade: QueryResolvers['laboratoryWorkGrade'] = ({
  id,
}) => {
  return db.laboratoryWorkGrade.findUnique({
    where: { id },
  })
}

export const createLaboratoryWorkGrade: MutationResolvers['createLaboratoryWorkGrade'] =
  async ({ input }) => {
    const teacherId = context?.currentUser?.id

    const laboratoryWork = await db.laboratoryWork.findUnique({
      where: { id: input.lrId },
      select: {
        subjectId: true,
      },
    })
    const subjectId = laboratoryWork?.subjectId
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
        ttg.findIndex((t) =>
          t.assignment.some((a) => a === 'LaboratoryWork')
        ) === -1)
    ) {
      throw new Error('You are not allowed to create this LW grade')
    }

    return db.laboratoryWorkGrade.create({
      data: input,
    })
  }

export const updateLaboratoryWorkGrade: MutationResolvers['updateLaboratoryWorkGrade'] =
  async ({ id, input }) => {
    const role = context?.currentUser?.roles

    const mg = await db.laboratoryWorkGrade.findUnique({
      where: { id },
      select: {
        lr: {
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
        groupId: mg.student.group.id,
        subjectId: mg.lr.Subject.id,
      },
    })

    if (
      role === 'TEACHER' &&
      (ttg === undefined ||
        ttg.findIndex((t) =>
          t.assignment.some((a) => a === 'LaboratoryWork')
        ) === -1)
    ) {
      throw new Error('You are not allowed to update this module grade')
    }

    return db.laboratoryWorkGrade.update({
      data: input,
      where: { id },
    })
  }

export const deleteLaboratoryWorkGrade: MutationResolvers['deleteLaboratoryWorkGrade'] =
  ({ id }) => {
    return db.laboratoryWorkGrade.delete({
      where: { id },
    })
  }

export const LaboratoryWorkGrade: LaboratoryWorkGradeRelationResolvers = {
  student: (_obj, { root }) => {
    return db.laboratoryWorkGrade
      .findUnique({ where: { id: root?.id } })
      .student()
  },
  lr: (_obj, { root }) => {
    return db.laboratoryWorkGrade.findUnique({ where: { id: root?.id } }).lr()
  },
}
