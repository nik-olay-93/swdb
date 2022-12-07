export const schema = gql`
  type LaboratoryWorkGrade {
    id: String!
    grade: TaskStatus
    student: Student!
    studentId: String!
    lr: LaboratoryWork!
    lrId: String!
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
    laboratoryWorkGrades: [LaboratoryWorkGrade!]! @requireAuth
    laboratoryWorkGrade(id: String!): LaboratoryWorkGrade @requireAuth
  }

  input CreateLaboratoryWorkGradeInput {
    grade: TaskStatus
    studentId: String!
    lrId: String!
  }

  input UpdateLaboratoryWorkGradeInput {
    grade: TaskStatus
    studentId: String
    lrId: String
  }

  type Mutation {
    createLaboratoryWorkGrade(
      input: CreateLaboratoryWorkGradeInput!
    ): LaboratoryWorkGrade! @requireAuth(roles: ["ADMIN", "TEACHER"])
    updateLaboratoryWorkGrade(
      id: String!
      input: UpdateLaboratoryWorkGradeInput!
    ): LaboratoryWorkGrade! @requireAuth(roles: ["ADMIN", "TEACHER"])
    deleteLaboratoryWorkGrade(id: String!): LaboratoryWorkGrade! @requireAuth
  }
`
