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
  ({ input }) => {
    return db.laboratoryWorkGrade.create({
      data: input,
    })
  }

export const updateLaboratoryWorkGrade: MutationResolvers['updateLaboratoryWorkGrade'] =
  ({ id, input }) => {
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
