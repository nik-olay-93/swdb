import type {
  QueryResolvers,
  MutationResolvers,
  TeacherRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const teachers: QueryResolvers['teachers'] = () => {
  return db.teacher.findMany()
}

export const teacher: QueryResolvers['teacher'] = ({ id }) => {
  return db.teacher.findUnique({
    where: { id },
  })
}

export const createTeacher: MutationResolvers['createTeacher'] = ({
  input,
}) => {
  return db.teacher.create({
    data: input,
  })
}

export const updateTeacher: MutationResolvers['updateTeacher'] = ({
  id,
  input,
}) => {
  return db.teacher.update({
    data: input,
    where: { id },
  })
}

export const deleteTeacher: MutationResolvers['deleteTeacher'] = ({ id }) => {
  return db.teacher.delete({
    where: { id },
  })
}

export const Teacher: TeacherRelationResolvers = {
  user: (_obj, { root }) => {
    return db.teacher.findUnique({ where: { id: root?.id } }).user()
  },
  groups: (_obj, { root }) => {
    return db.teacher.findUnique({ where: { id: root?.id } }).groups()
  },
}
