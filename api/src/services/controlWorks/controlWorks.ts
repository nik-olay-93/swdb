import type {
  QueryResolvers,
  MutationResolvers,
  ControlWorkRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const controlWorks: QueryResolvers['controlWorks'] = () => {
  return db.controlWork.findMany()
}

export const controlWork: QueryResolvers['controlWork'] = ({ id }) => {
  return db.controlWork.findUnique({
    where: { id },
  })
}

export const createControlWork: MutationResolvers['createControlWork'] = ({
  input,
}) => {
  return db.controlWork.create({
    data: input,
  })
}

export const updateControlWork: MutationResolvers['updateControlWork'] = ({
  id,
  input,
}) => {
  return db.controlWork.update({
    data: input,
    where: { id },
  })
}

export const deleteControlWork: MutationResolvers['deleteControlWork'] = ({
  id,
}) => {
  return db.controlWork.delete({
    where: { id },
  })
}

export const ControlWork: ControlWorkRelationResolvers = {
  ControlWorkGrade: (_obj, { root }) => {
    return db.controlWork
      .findUnique({ where: { id: root?.id } })
      .ControlWorkGrade()
  },
  Subject: (_obj, { root }) => {
    return db.controlWork.findUnique({ where: { id: root?.id } }).Subject()
  },
}
