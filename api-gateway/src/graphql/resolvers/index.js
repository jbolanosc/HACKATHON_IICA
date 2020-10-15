import { mergeResolvers } from "@graphql-tools/merge";

import BillingResolver from "./mutations/store/Billing";
import BasketResolver from "./mutations/store/Basket";
import OrderResolver from "./mutations/store/Order";
import ProductResolver from "./mutations/store/Product";

import AdminUserResolver from "./mutations/user/AdminUser";
import UserResolver from "./mutations/user/User";
import CarrierResolver from "./mutations/user/Carrier";
import ClientResolver from "./mutations/user/Client";

const resolvers = [
  BillingResolver,
  BasketResolver,
  OrderResolver,
  ProductResolver,
  AdminUserResolver,
  UserResolver,
  CarrierResolver,
  ClientResolver,
];

export default mergeResolvers(resolvers);
