import type {
  QueryResolvers,
  MutationResolvers,
  StudentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const students: QueryResolvers['students'] = () => {
  return db.student.findMany()
}

export const student: QueryResolvers['student'] = ({ id }) => {
  return db.student.findUnique({
    where: { id },
  })
}

export const createStudent: MutationResolvers['createStudent'] = ({
  input,
}) => {
  return db.student.create({
    data: input,
  })
}

export const updateStudent: MutationResolvers['updateStudent'] = ({
  id,
  input,
}) => {
  return db.student.update({
    data: input,
    where: { id },
  })
}

export const deleteStudent: MutationResolvers['deleteStudent'] = ({ id }) => {
  return db.student.delete({
    where: { id },
  })
}

export const Student: StudentRelationResolvers = {
  group: (_obj, { root }) => {
    return db.student.findUnique({ where: { id: root?.id } }).group()
  },
  ControlWorkGrade: (_obj, { root }) => {
    return db.student.findUnique({ where: { id: root?.id } }).ControlWorkGrade()
  },
  LaboratoryWorkGrade: (_obj, { root }) => {
    return db.student
      .findUnique({ where: { id: root?.id } })
      .LaboratoryWorkGrade()
  },
  SemGrade: (_obj, { root }) => {
    return db.student.findUnique({ where: { id: root?.id } }).SemGrade()
  },
  ModuleGrade: (_obj, { root }) => {
    return db.student.findUnique({ where: { id: root?.id } }).ModuleGrade()
  },
}
