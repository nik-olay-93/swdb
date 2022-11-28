import type {
  QueryResolvers,
  MutationResolvers,
  TeacherToGroupRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const teacherToGroups: QueryResolvers['teacherToGroups'] = () => {
  return db.teacherToGroup.findMany()
}

export const teacherToGroup: QueryResolvers['teacherToGroup'] = ({ id }) => {
  return db.teacherToGroup.findUnique({
    where: { id },
  })
}

export const createTeacherToGroup: MutationResolvers['createTeacherToGroup'] =
  ({ input }) => {
    return db.teacherToGroup.create({
      data: input,
    })
  }

export const updateTeacherToGroup: MutationResolvers['updateTeacherToGroup'] =
  ({ id, input }) => {
    return db.teacherToGroup.update({
      data: input,
      where: { id },
    })
  }

export const deleteTeacherToGroup: MutationResolvers['deleteTeacherToGroup'] =
  ({ id }) => {
    return db.teacherToGroup.delete({
      where: { id },
    })
  }

export const TeacherToGroup: TeacherToGroupRelationResolvers = {
  teacher: (_obj, { root }) => {
    return db.teacherToGroup.findUnique({ where: { id: root?.id } }).teacher()
  },
  group: (_obj, { root }) => {
    return db.teacherToGroup.findUnique({ where: { id: root?.id } }).group()
  },
  subject: (_obj, { root }) => {
    return db.teacherToGroup.findUnique({ where: { id: root?.id } }).subject()
  },
}
