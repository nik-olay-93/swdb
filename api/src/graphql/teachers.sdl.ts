export const schema = gql`
  type Teacher {
    user: User!
    userId: String!
    name: String!
    surname: String!
    middlename: String!
    groups: [TeacherToGroup]!
  }

  type Query {
    teachers: [Teacher!]! @requireAuth
    teacher(id: String!): Teacher @requireAuth
  }

  input CreateTeacherInput {
    userId: String!
    name: String!
    surname: String!
    middlename: String!
  }

  input UpdateTeacherInput {
    userId: String
    name: String
    surname: String
    middlename: String
  }

  type Mutation {
    createTeacher(input: CreateTeacherInput!): Teacher! @requireAuth
    updateTeacher(id: String!, input: UpdateTeacherInput!): Teacher!
      @requireAuth
    deleteTeacher(id: String!): Teacher! @requireAuth
  }
`
