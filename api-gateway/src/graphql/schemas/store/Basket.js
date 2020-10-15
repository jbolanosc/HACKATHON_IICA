import { gql } from "apollo-server";

export const typeDef = gql`
  type Basket {
    id: ID!
    seller: ID
    name: String
    items: [String]
    price: Float
    available: Int
    createdAt: Date
  }

  extend type Mutation {
    createBasket(
      seller: ID
      name: String
      items: [String]
      price: Float
      available: Int
    ): Basket!

    updateBasket(
      id: ID!
      seller: ID
      name: String
      items: [String]
      price: Float
      available: Int
    ): Basket!

    deleteBasket(id: ID): Basket!
  }

  extend type Query {
    baskets: [Basket]
    basket(id: ID): Basket!
    filterBasket(filter: String): [Basket]!
  }
`;
