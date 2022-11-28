export const schema = gql`
  type TeacherToGroup {
    id: String!
    teacher: Teacher!
    teacherId: String!
    group: Group!
    groupId: String!
    subject: Subject!
    subjectId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    teacherToGroups: [TeacherToGroup!]! @requireAuth
    teacherToGroup(id: String!): TeacherToGroup @requireAuth
  }

  input CreateTeacherToGroupInput {
    teacherId: String!
    groupId: String!
    subjectId: String!
  }

  input UpdateTeacherToGroupInput {
    teacherId: String
    groupId: String
    subjectId: String
  }

  type Mutation {
    createTeacherToGroup(input: CreateTeacherToGroupInput!): TeacherToGroup!
      @requireAuth
    updateTeacherToGroup(
      id: String!
      input: UpdateTeacherToGroupInput!
    ): TeacherToGroup! @requireAuth
    deleteTeacherToGroup(id: String!): TeacherToGroup! @requireAuth
  }
`
