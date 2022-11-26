export const schema = gql`
  type Module {
    id: String!
    name: String!
    minGrade: Int!
    okGrade: Int!
    goodGrade: Int!
    maxGrade: Int!
    week: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    Subject: Subject!
    subjectId: String!
    ModuleGrade: [ModuleGrade]!
  }

  type Query {
    modules: [Module!]! @requireAuth
    module(id: String!): Module @requireAuth
  }

  input CreateModuleInput {
    name: String!
    minGrade: Int!
    okGrade: Int!
    goodGrade: Int!
    maxGrade: Int!
    week: Int!
    subjectId: String!
  }

  input UpdateModuleInput {
    name: String
    minGrade: Int
    okGrade: Int
    goodGrade: Int
    maxGrade: Int
    week: Int
    subjectId: String
  }

  type Mutation {
    createModule(input: CreateModuleInput!): Module! @requireAuth
    updateModule(id: String!, input: UpdateModuleInput!): Module! @requireAuth
    deleteModule(id: String!): Module! @requireAuth
  }
`
