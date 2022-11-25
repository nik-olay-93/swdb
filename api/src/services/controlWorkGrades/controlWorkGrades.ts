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
  ({ input }) => {
    return db.controlWorkGrade.create({
      data: input,
    })
  }

export const updateControlWorkGrade: MutationResolvers['updateControlWorkGrade'] =
  ({ id, input }) => {
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
