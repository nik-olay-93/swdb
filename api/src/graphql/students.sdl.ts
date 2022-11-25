export const schema = gql`
  type Student {
    id: String!
    name: String!
    surname: String!
    middlename: String!
    tid: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    group: Group!
    groupId: String!
    ControlWorkGrade: [ControlWorkGrade]!
    LaboratoryWorkGrade: [LaboratoryWorkGrade]!
    SemGrade: [SemGrade]!
    ModuleGrade: [ModuleGrade]!
  }

  type Query {
    students: [Student!]! @requireAuth
    student(id: String!): Student @requireAuth
  }

  input CreateStudentInput {
    name: String!
    surname: String!
    middlename: String!
    tid: String!
    groupId: String!
  }

  input UpdateStudentInput {
    name: String
    surname: String
    middlename: String
    tid: String
    groupId: String
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student! @requireAuth
    updateStudent(id: String!, input: UpdateStudentInput!): Student!
      @requireAuth
    deleteStudent(id: String!): Student! @requireAuth
  }
`
