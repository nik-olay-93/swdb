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

export const createSemGrade: MutationResolvers['createSemGrade'] = ({
  input,
}) => {
  return db.semGrade.create({
    data: input,
  })
}

export const updateSemGrade: MutationResolvers['updateSemGrade'] = ({
  id,
  input,
}) => {
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
