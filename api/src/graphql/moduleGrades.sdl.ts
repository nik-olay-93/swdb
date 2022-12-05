export const schema = gql`
  type ModuleGrade {
    id: String!
    grade: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    student: Student!
    studentId: String!
    module: Module!
    moduleId: String!
  }

  type Query {
    moduleGrades: [ModuleGrade!]! @requireAuth
    moduleGrade(id: String!): ModuleGrade @requireAuth
  }

  input CreateModuleGradeInput {
    grade: Int!
    studentId: String!
    moduleId: String!
  }

  input UpdateModuleGradeInput {
    grade: Int
    studentId: String
    moduleId: String
  }

  type Mutation {
    createModuleGrade(input: CreateModuleGradeInput!): ModuleGrade! @requireAuth
    updateModuleGrade(
      id: String!
      input: UpdateModuleGradeInput!
    ): ModuleGrade! @requireAuth(roles: ["ADMIN", "TEACHER"])
    deleteModuleGrade(id: String!): ModuleGrade! @requireAuth
  }
`
