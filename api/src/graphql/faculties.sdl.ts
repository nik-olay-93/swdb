export const schema = gql`
  type Faculty {
    id: String!
    name: String!
    description: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    departments: [Department]!
  }

  type Query {
    faculties: [Faculty!]! @requireAuth
    faculty(id: String!): Faculty @requireAuth
  }

  input CreateFacultyInput {
    name: String!
    description: String!
  }

  input UpdateFacultyInput {
    name: String
    description: String
  }

  type Mutation {
    createFaculty(input: CreateFacultyInput!): Faculty! @requireAuth
    updateFaculty(id: String!, input: UpdateFacultyInput!): Faculty!
      @requireAuth
    deleteFaculty(id: String!): Faculty! @requireAuth
  }
`
