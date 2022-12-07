export const schema = gql`
  type ControlWorkGrade {
    id: String!
    grade: TaskStatus
    student: Student!
    studentId: String!
    cm: ControlWork!
    cmId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum TaskStatus {
    Issued
    Done
    Asserted
    AssertedAhead
    AssertedBehind
  }

  type Query {
    controlWorkGrades: [ControlWorkGrade!]! @requireAuth
    controlWorkGrade(id: String!): ControlWorkGrade @requireAuth
  }

  input CreateControlWorkGradeInput {
    grade: TaskStatus
    studentId: String!
    cmId: String!
  }

  input UpdateControlWorkGradeInput {
    grade: TaskStatus
    studentId: String
    cmId: String
  }

  type Mutation {
    createControlWorkGrade(
      input: CreateControlWorkGradeInput!
    ): ControlWorkGrade! @requireAuth(roles: ["TEACHER", "ADMIN"])
    updateControlWorkGrade(
      id: String!
      input: UpdateControlWorkGradeInput!
    ): ControlWorkGrade! @requireAuth(roles: ["TEACHER", "ADMIN"])
    deleteControlWorkGrade(id: String!): ControlWorkGrade! @requireAuth
  }
`
