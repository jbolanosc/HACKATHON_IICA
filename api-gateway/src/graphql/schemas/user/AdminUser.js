import { gql } from "apollo-server";

export const typeDef = gql`
  type AdminUser {
    id: ID!
    email: String!
    password: String!
    fullname: String!
    createdAt: String
  }

  extend type Mutation {
    createAdminUser(
      email: String!
      password: String!
      fullname: String!
    ): AdminUser!
  }
`;
