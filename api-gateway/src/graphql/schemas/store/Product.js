import { gql } from "apollo-server";

export const typeDef = gql`
  type Product {
    id: ID!
    name: String
    weight: String
    seller: ID
    productType: String
    season: String
    available: Int
    price: Float
    imagePath: String
    rating: Float
    createdAt: Date
  }

  extend type Mutation {
    createProduct(
      name: String
      weight: String
      seller: ID
      productType: String
      season: String
      available: Int
      price: Float
      imagePath: String
    ): Product!

    updateProduct(
      id: ID
      name: String
      weight: String
      productType: String
      season: String
      available: Int
      price: Float
      imagePath: String
      rating: Float
    ): Product!

    deleteProduct(id: ID): Product!
  }

  extend type Query {
    products: [Product]
    product(id: ID): Product!
    filterProduct(filter: String): [Product]!
  }
`;
