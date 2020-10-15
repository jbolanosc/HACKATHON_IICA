import { gql } from "apollo-server";

export const typeDef = gql`
  type Billing {
    id: ID
    seller: ID
    client: ID
    order: String
    createdAt: Date
  }

  extend type Mutation {
    createBilling(seller: ID!, client: ID!, order: String!): Billing!
  }

  extend type Query {
    billing(id: ID!): Billing!
    filterBilling(filter: String!): Billing!
  }
`;
