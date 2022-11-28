export const schema = gql`
  type Subject {
    id: String!
    name: String!
    description: String!
    courses: [Course]!
    department: Department!
    departmentId: String!
    modules: [Module]!
    ControlWorks: [ControlWork]!
    LaboratoryWorks: [LaboratoryWork]!
    seminars: [Seminar]!
    minGrade: Int!
    okGrade: Int!
    goodGrade: Int!
    maxGrade: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    teachers: [TeacherToGroup]!
  }

  type Query {
    subjects: [Subject!]! @requireAuth
    subject(id: String!): Subject @requireAuth
    mySubjects: [Subject!]! @requireAuth(roles: ["TEACHER"])
  }

  input CreateSubjectInput {
    name: String!
    description: String!
    departmentId: String!
    minGrade: Int!
    okGrade: Int!
    goodGrade: Int!
    maxGrade: Int!
  }

  input UpdateSubjectInput {
    name: String
    description: String
    departmentId: String
    minGrade: Int
    okGrade: Int
    goodGrade: Int
    maxGrade: Int
  }

  type Mutation {
    createSubject(input: CreateSubjectInput!): Subject! @requireAuth
    updateSubject(id: String!, input: UpdateSubjectInput!): Subject!
      @requireAuth
    deleteSubject(id: String!): Subject! @requireAuth
  }
`
