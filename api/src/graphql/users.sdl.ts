export const schema = gql`
  type User {
    id: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    role: Role!
    Teacher: Teacher
  }

  enum Role {
    USER
    TEACHER
    ADMIN
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    role: Role!
  }

  input UpdateUserInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    role: Role
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
