import BillingService from "#root/adapters/store-service/BillingAdapter";

const BillingResolver = {
  Mutation: {
    async createBasket(obj, { seller, client, order }) {
      return await BillingService.createBilling({
        seller,
        client,
        order,
      });
    },
  },
  Query: {
    async billing({ billingId }) {
      return await BillingService.getBilling({ billingId });
    },
    async filterBilling({ filter }) {
      return await BillingService.filterBilling({ filter });
    },
  },
};

export default BillingResolver;
