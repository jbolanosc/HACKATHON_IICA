import { typeDef as AdminUser } from "./user/AdminUser";
import { typeDef as User } from "./user/User";
import { typeDef as Carrier } from "./user/Carrier";
import { typeDef as Client } from "./user/Client";

import { typeDef as Product } from "./store/Product";
import { typeDef as Basket } from "./store/Basket";
import { typeDef as Order } from "./store/Order";
import { typeDef as Billing } from "./store/Billing";

import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${AdminUser}
  ${User}
  ${Carrier}
  ${Client}

  ${Product}
  ${Basket}
  ${Order}
  ${Billing}
`;

export default typeDefs;
