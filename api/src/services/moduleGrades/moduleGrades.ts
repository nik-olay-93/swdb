import type {
  QueryResolvers,
  MutationResolvers,
  ModuleGradeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const moduleGrades: QueryResolvers['moduleGrades'] = () => {
  return db.moduleGrade.findMany()
}

export const moduleGrade: QueryResolvers['moduleGrade'] = ({ id }) => {
  return db.moduleGrade.findUnique({
    where: { id },
  })
}

export const createModuleGrade: MutationResolvers['createModuleGrade'] =
  async ({ input }) => {
    const teacherId = context?.currentUser?.id

    const module = await db.module.findUnique({
      where: { id: input.moduleId },
      select: {
        subjectId: true,
      },
    })
    const subjectId = module?.subjectId
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
        ttg.findIndex((t) => t.assignment.some((a) => a === 'Module')) === -1)
    ) {
      throw new Error('You are not allowed to create this module grade')
    }

    return db.moduleGrade.create({
      data: input,
    })
  }

export const updateModuleGrade: MutationResolvers['updateModuleGrade'] =
  async ({ id, input }) => {
    const role = context?.currentUser?.roles

    const mg = await db.moduleGrade.findUnique({
      where: { id },
      select: {
        module: {
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
        subjectId: mg.module.Subject.id,
      },
    })

    if (
      role === 'TEACHER' &&
      (ttg === undefined ||
        ttg.findIndex((t) => t.assignment.some((a) => a === 'Module')) === -1)
    ) {
      throw new Error('You are not allowed to update this module grade')
    }

    return db.moduleGrade.update({
      data: input,
      where: { id },
    })
  }

export const deleteModuleGrade: MutationResolvers['deleteModuleGrade'] = ({
  id,
}) => {
  return db.moduleGrade.delete({
    where: { id },
  })
}

export const ModuleGrade: ModuleGradeRelationResolvers = {
  student: (_obj, { root }) => {
    return db.moduleGrade.findUnique({ where: { id: root?.id } }).student()
  },
  module: (_obj, { root }) => {
    return db.moduleGrade.findUnique({ where: { id: root?.id } }).module()
  },
}
