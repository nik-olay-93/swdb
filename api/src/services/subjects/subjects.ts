import type {
  QueryResolvers,
  MutationResolvers,
  SubjectRelationResolvers,
} from 'types/graphql'

import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const subjects: QueryResolvers['subjects'] = () => {
  return db.subject.findMany()
}

export const subject: QueryResolvers['subject'] = ({ id }) => {
  return db.subject.findUnique({
    where: { id },
  })
}

export const mySubjects: QueryResolvers['mySubjects'] = () => {
  requireAuth({ roles: 'TEACHER' })

  return db.subject.findMany({
    where: {
      teachers: {
        some: {
          teacher: {
            userId: context.currentUser.id,
          },
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  })
}

export const createSubject: MutationResolvers['createSubject'] = ({
  input,
}) => {
  return db.subject.create({
    data: input,
  })
}

export const updateSubject: MutationResolvers['updateSubject'] = ({
  id,
  input,
}) => {
  return db.subject.update({
    data: input,
    where: { id },
  })
}

export const deleteSubject: MutationResolvers['deleteSubject'] = ({ id }) => {
  return db.subject.delete({
    where: { id },
  })
}

export const Subject: SubjectRelationResolvers = {
  courses: (_obj, { root }) => {
    return db.subject.findUnique({ where: { id: root?.id } }).courses()
  },
  department: (_obj, { root }) => {
    return db.subject.findUnique({ where: { id: root?.id } }).department()
  },
  modules: (_obj, { root }) => {
    return db.subject.findUnique({ where: { id: root?.id } }).modules()
  },
  ControlWorks: (_obj, { root }) => {
    return db.subject.findUnique({ where: { id: root?.id } }).ControlWorks()
  },
  LaboratoryWorks: (_obj, { root }) => {
    return db.subject.findUnique({ where: { id: root?.id } }).LaboratoryWorks()
  },
  seminars: (_obj, { root }) => {
    return db.subject.findUnique({ where: { id: root?.id } }).seminars()
  },
  teachers: (_obj, { root }) => {
    return db.subject.findUnique({ where: { id: root?.id } }).teachers()
  },
}
