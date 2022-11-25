export const schema = gql`
  type ControlWork {
    id: String!
    name: String!
    week: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    ControlWorkGrade: [ControlWorkGrade]!
    Subject: Subject!
    subjectId: String!
  }

  type Query {
    controlWorks: [ControlWork!]! @requireAuth
    controlWork(id: String!): ControlWork @requireAuth
  }

  input CreateControlWorkInput {
    name: String!
    week: Int!
    subjectId: String!
  }

  input UpdateControlWorkInput {
    name: String
    week: Int
    subjectId: String
  }

  type Mutation {
    createControlWork(input: CreateControlWorkInput!): ControlWork! @requireAuth
    updateControlWork(
      id: String!
      input: UpdateControlWorkInput!
    ): ControlWork! @requireAuth
    deleteControlWork(id: String!): ControlWork! @requireAuth
  }
`
