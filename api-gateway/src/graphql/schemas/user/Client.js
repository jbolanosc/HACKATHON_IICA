import { gql } from "apollo-server";

export const typeDef = gql`
  type Client {
    id: ID!
    email: String!
    password: String!
    fullname: String!
    address: [String]
    createdAt: String
  }

  extend type Mutation {
    createClient(
      fullname: String
      email: String!
      password: String!
      address: String
    ): Client!
    signinClient(email: String!, password: String!): Client!
  }

  extend type Query {
    profileClient(id: ID!): Client
  }
`;
