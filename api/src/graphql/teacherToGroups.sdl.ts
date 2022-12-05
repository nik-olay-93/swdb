export const schema = gql`
  type TeacherToGroup {
    id: String!
    teacher: Teacher!
    teacherId: String!
    group: Group!
    groupId: String!
    subject: Subject!
    subjectId: String!
    assignment: [TeacherAssignment]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum TeacherAssignment {
    ControlWork
    LaboratoryWork
    Seminar
  }

  type Query {
    teacherToGroups: [TeacherToGroup!]! @requireAuth
    teacherToGroup(id: String!): TeacherToGroup @requireAuth
    myAssignments: [TeacherToGroup!]! @requireAuth(roles: ["TEACHER"])
  }

  input CreateTeacherToGroupInput {
    teacherId: String!
    groupId: String!
    subjectId: String!
    assignment: [TeacherAssignment]!
  }

  input UpdateTeacherToGroupInput {
    teacherId: String
    groupId: String
    subjectId: String
    assignment: [TeacherAssignment]!
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
