import type {
  QueryResolvers,
  MutationResolvers,
  LaboratoryWorkRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const laboratoryWorks: QueryResolvers['laboratoryWorks'] = () => {
  return db.laboratoryWork.findMany()
}

export const laboratoryWork: QueryResolvers['laboratoryWork'] = ({ id }) => {
  return db.laboratoryWork.findUnique({
    where: { id },
  })
}

export const createLaboratoryWork: MutationResolvers['createLaboratoryWork'] =
  ({ input }) => {
    return db.laboratoryWork.create({
      data: input,
    })
  }

export const updateLaboratoryWork: MutationResolvers['updateLaboratoryWork'] =
  ({ id, input }) => {
    return db.laboratoryWork.update({
      data: input,
      where: { id },
    })
  }

export const deleteLaboratoryWork: MutationResolvers['deleteLaboratoryWork'] =
  ({ id }) => {
    return db.laboratoryWork.delete({
      where: { id },
    })
  }

export const LaboratoryWork: LaboratoryWorkRelationResolvers = {
  LaboratoryWorkGrade: (_obj, { root }) => {
    return db.laboratoryWork
      .findUnique({ where: { id: root?.id } })
      .LaboratoryWorkGrade()
  },
  Subject: (_obj, { root }) => {
    return db.laboratoryWork.findUnique({ where: { id: root?.id } }).Subject()
  },
}
