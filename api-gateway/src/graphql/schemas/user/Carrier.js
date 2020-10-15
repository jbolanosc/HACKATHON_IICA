import { gql } from "apollo-server";

export const typeDef = gql`
  type Carrier {
    id: ID!
    fullname: String!
    email: String!
    phoneNumber: String!
    location: String!
    vehicle: String!
    vehicleCapacity: String!
    active: Boolean
    rating: Int
    createdAt: String
    imagePath: String
    orders: String
  }

  extend type Mutation {
    signup(
      fullname: String!
      email: String!
      password: String!
      phoneNumber: String
      location: String
      vehicle: String
      vehicleCapacity: String
      imagePath: String
    ): Carrier!
    signin(email: String!, password: String!): Carrier!
  }

  extend type Query {
    carriers: [Carrier!]!
    profileCarrier(id: ID!): Carrier!
  }
`;
