import { gql } from "apollo-server";

export const typeDef = gql`
  type User {
    id: ID!
    fullname: String!
    email: String!
    password: String!
    phoneNumber: String!
    location: String!
    imagePath: String!
    active: Boolean
    rating: Int
    createdAt: Date
    products: [String]
    baskets: [String]
  }

  extend type Mutation {
    createUser(
      fullname: String
      email: String
      phoneNumber: String
      location: String
      imagePath: String
    ): User!
    signinUser(email: String!, password: String!): User!
  }

  extend type Query {
    users: [User!]!
    profileUser(id: ID!): User!
  }
`;
