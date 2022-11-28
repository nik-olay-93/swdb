import type {
  QueryResolvers,
  MutationResolvers,
  GroupRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const groups: QueryResolvers['groups'] = () => {
  return db.group.findMany()
}

export const group: QueryResolvers['group'] = ({ id }) => {
  return db.group.findUnique({
    where: { id },
  })
}

export const createGroup: MutationResolvers['createGroup'] = ({ input }) => {
  return db.group.create({
    data: input,
  })
}

export const updateGroup: MutationResolvers['updateGroup'] = ({
  id,
  input,
}) => {
  return db.group.update({
    data: input,
    where: { id },
  })
}

export const deleteGroup: MutationResolvers['deleteGroup'] = ({ id }) => {
  return db.group.delete({
    where: { id },
  })
}

export const Group: GroupRelationResolvers = {
  course: (_obj, { root }) => {
    return db.group.findUnique({ where: { id: root?.id } }).course()
  },
  department: (_obj, { root }) => {
    return db.group.findUnique({ where: { id: root?.id } }).department()
  },
  students: (_obj, { root }) => {
    return db.group.findUnique({ where: { id: root?.id } }).students({
      orderBy: {
        surname: 'asc',
      },
    })
  },
  teachers: (_obj, { root }) => {
    return db.group.findUnique({ where: { id: root?.id } }).teachers()
  },
}
