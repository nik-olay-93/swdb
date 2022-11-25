import type {
  QueryResolvers,
  MutationResolvers,
  FacultyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const faculties: QueryResolvers['faculties'] = () => {
  return db.faculty.findMany({
    orderBy: {
      name: 'asc',
    },
  })
}

export const faculty: QueryResolvers['faculty'] = ({ id }) => {
  return db.faculty.findUnique({
    where: { id },
  })
}

export const createFaculty: MutationResolvers['createFaculty'] = ({
  input,
}) => {
  return db.faculty.create({
    data: input,
  })
}

export const updateFaculty: MutationResolvers['updateFaculty'] = ({
  id,
  input,
}) => {
  return db.faculty.update({
    data: input,
    where: { id },
  })
}

export const deleteFaculty: MutationResolvers['deleteFaculty'] = ({ id }) => {
  return db.faculty.delete({
    where: { id },
  })
}

export const Faculty: FacultyRelationResolvers = {
  departments: (_obj, { root }) => {
    return db.faculty.findUnique({ where: { id: root?.id } }).departments()
  },
}
