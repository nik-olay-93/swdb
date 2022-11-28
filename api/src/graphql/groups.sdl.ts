export const schema = gql`
  type Group {
    id: String!
    name: String!
    course: Course!
    courseId: String!
    semester: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    department: Department!
    departmentId: String!
    students: [Student]!
    teachers: [TeacherToGroup]!
  }

  type Query {
    groups: [Group!]! @requireAuth
    group(id: String!): Group @requireAuth
    myGroups: [Group!]! @requireAuth(roles: ["TEACHER"])
  }

  input CreateGroupInput {
    name: String!
    courseId: String!
    semester: Int!
    departmentId: String!
  }

  input UpdateGroupInput {
    name: String
    courseId: String
    semester: Int
    departmentId: String
  }

  type Mutation {
    createGroup(input: CreateGroupInput!): Group! @requireAuth
    updateGroup(id: String!, input: UpdateGroupInput!): Group! @requireAuth
    deleteGroup(id: String!): Group! @requireAuth
  }
`
