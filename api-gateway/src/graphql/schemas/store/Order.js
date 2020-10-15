import { gql } from "apollo-server";

export const typeDef = gql`
  type Order {
    id: ID!
    seller: ID
    client: ID
    complete: Boolean
    actualLocation: String
    deliveryDate: Date
    destiny: String
    items: [String]
    total: Float
    carrier: ID
    createdAt: Date
  }

  extend type Mutation {
    createOrder(
      seller: ID
      client: ID
      actualLocation: String
      deliveryDate: Date
      destiny: String
      items: [String]
      total: Float
      carrier: ID
    ): Order!

    updateOrder(
      id: ID!
      complete: Boolean
      actualLocation: String
      deliveryDate: Date
      destiny: String
      items: [String]
      total: Float
    ): Order!

    deleteOrder(id: ID): Order!
  }

  extend type Query {
    orders: [Order]
    order(id: ID): Order!
    filterOrder(filter: String): [Order]!
  }
`;
