export const schema = gql`
  type LaboratoryWork {
    id: String!
    name: String!
    week: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    LaboratoryWorkGrade: [LaboratoryWorkGrade]!
    Subject: Subject!
    subjectId: String!
  }

  type Query {
    laboratoryWorks: [LaboratoryWork!]! @requireAuth
    laboratoryWork(id: String!): LaboratoryWork @requireAuth
  }

  input CreateLaboratoryWorkInput {
    name: String!
    week: Int!
    subjectId: String!
  }

  input UpdateLaboratoryWorkInput {
    name: String
    week: Int
    subjectId: String
  }

  type Mutation {
    createLaboratoryWork(input: CreateLaboratoryWorkInput!): LaboratoryWork!
      @requireAuth
    updateLaboratoryWork(
      id: String!
      input: UpdateLaboratoryWorkInput!
    ): LaboratoryWork! @requireAuth
    deleteLaboratoryWork(id: String!): LaboratoryWork! @requireAuth
  }
`
