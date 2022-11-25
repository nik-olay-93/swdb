export const schema = gql`
  type SemGrade {
    id: String!
    grade: SemStatus
    student: Student!
    studentId: String!
    seminar: Seminar!
    seminarId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum SemStatus {
    Attended
    Worked
  }

  type Query {
    semGrades: [SemGrade!]! @requireAuth
    semGrade(id: String!): SemGrade @requireAuth
  }

  input CreateSemGradeInput {
    grade: SemStatus
    studentId: String!
    seminarId: String!
  }

  input UpdateSemGradeInput {
    grade: SemStatus
    studentId: String
    seminarId: String
  }

  type Mutation {
    createSemGrade(input: CreateSemGradeInput!): SemGrade! @requireAuth
    updateSemGrade(id: String!, input: UpdateSemGradeInput!): SemGrade!
      @requireAuth
    deleteSemGrade(id: String!): SemGrade! @requireAuth
  }
`
