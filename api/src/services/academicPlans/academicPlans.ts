import type {
  QueryResolvers,
  MutationResolvers,
  AcademicPlanRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const academicPlans: QueryResolvers['academicPlans'] = () => {
  return db.academicPlan.findMany()
}

export const academicPlan: QueryResolvers['academicPlan'] = ({ id }) => {
  return db.academicPlan.findUnique({
    where: { id },
  })
}

export const createAcademicPlan: MutationResolvers['createAcademicPlan'] = ({
  input,
}) => {
  return db.academicPlan.create({
    data: input,
  })
}

export const updateAcademicPlan: MutationResolvers['updateAcademicPlan'] = ({
  id,
  input,
}) => {
  return db.academicPlan.update({
    data: input,
    where: { id },
  })
}

export const deleteAcademicPlan: MutationResolvers['deleteAcademicPlan'] = ({
  id,
}) => {
  return db.academicPlan.delete({
    where: { id },
  })
}

export const AcademicPlan: AcademicPlanRelationResolvers = {
  courses: (_obj, { root }) => {
    return db.academicPlan.findUnique({ where: { id: root?.id } }).courses()
  },
}
