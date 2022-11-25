export const schema = gql`
  type Department {
    id: String!
    name: String!
    description: String!
    faculty: Faculty!
    facultyId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    subjects: [Subject]!
    groups: [Group]!
  }

  type Query {
    departments: [Department!]! @requireAuth
    department(id: String!): Department @requireAuth
  }

  input CreateDepartmentInput {
    name: String!
    description: String!
    facultyId: String!
  }

  input UpdateDepartmentInput {
    name: String
    description: String
    facultyId: String
  }

  type Mutation {
    createDepartment(input: CreateDepartmentInput!): Department! @requireAuth
    updateDepartment(id: String!, input: UpdateDepartmentInput!): Department!
      @requireAuth
    deleteDepartment(id: String!): Department! @requireAuth
  }
`
