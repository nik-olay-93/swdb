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

export const createModuleGrade: MutationResolvers['createModuleGrade'] = ({
  input,
}) => {
  return db.moduleGrade.create({
    data: input,
  })
}

export const updateModuleGrade: MutationResolvers['updateModuleGrade'] = ({
  id,
  input,
}) => {
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
