export const schema = gql`
  type AcademicPlan {
    id: String!
    name: String!
    description: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    courses: [Course]!
  }

  type Query {
    academicPlans: [AcademicPlan!]! @requireAuth
    academicPlan(id: String!): AcademicPlan @requireAuth
  }

  input CreateAcademicPlanInput {
    name: String!
    description: String!
  }

  input UpdateAcademicPlanInput {
    name: String
    description: String
  }

  type Mutation {
    createAcademicPlan(input: CreateAcademicPlanInput!): AcademicPlan!
      @requireAuth
    updateAcademicPlan(
      id: String!
      input: UpdateAcademicPlanInput!
    ): AcademicPlan! @requireAuth
    deleteAcademicPlan(id: String!): AcademicPlan! @requireAuth
  }
`
