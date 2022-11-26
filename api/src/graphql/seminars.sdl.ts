export const schema = gql`
  type Seminar {
    id: String!
    name: String!
    description: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    SemGrade: [SemGrade]!
    Subject: Subject!
    subjectId: String!
  }

  type Query {
    seminars: [Seminar!]! @requireAuth
    seminar(id: String!): Seminar @requireAuth
  }

  input CreateSeminarInput {
    name: String!
    description: String!
    subjectId: String!
  }

  input UpdateSeminarInput {
    name: String
    description: String
    subjectId: String
  }

  type Mutation {
    createSeminar(input: CreateSeminarInput!): Seminar! @requireAuth
    updateSeminar(id: String!, input: UpdateSeminarInput!): Seminar!
      @requireAuth
    deleteSeminar(id: String!): Seminar! @requireAuth
  }
`
