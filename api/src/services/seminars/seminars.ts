import type {
  QueryResolvers,
  MutationResolvers,
  SeminarRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const seminars: QueryResolvers['seminars'] = () => {
  return db.seminar.findMany()
}

export const seminar: QueryResolvers['seminar'] = ({ id }) => {
  return db.seminar.findUnique({
    where: { id },
  })
}

export const createSeminar: MutationResolvers['createSeminar'] = ({
  input,
}) => {
  return db.seminar.create({
    data: input,
  })
}

export const updateSeminar: MutationResolvers['updateSeminar'] = ({
  id,
  input,
}) => {
  return db.seminar.update({
    data: input,
    where: { id },
  })
}

export const deleteSeminar: MutationResolvers['deleteSeminar'] = ({ id }) => {
  return db.seminar.delete({
    where: { id },
  })
}

export const Seminar: SeminarRelationResolvers = {
  SemGrade: (_obj, { root }) => {
    return db.seminar.findUnique({ where: { id: root?.id } }).SemGrade()
  },
  Subject: (_obj, { root }) => {
    return db.seminar.findUnique({ where: { id: root?.id } }).Subject()
  },
}
