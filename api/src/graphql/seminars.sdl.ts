export const schema = gql`
  type Seminar {
    id: String!
    name: String!
    week: Int!
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
    week: Int!
    subjectId: String!
  }

  input UpdateSeminarInput {
    name: String
    week: Int
    subjectId: String
  }

  type Mutation {
    createSeminar(input: CreateSeminarInput!): Seminar! @requireAuth
    updateSeminar(id: String!, input: UpdateSeminarInput!): Seminar!
      @requireAuth
    deleteSeminar(id: String!): Seminar! @requireAuth
  }
`
