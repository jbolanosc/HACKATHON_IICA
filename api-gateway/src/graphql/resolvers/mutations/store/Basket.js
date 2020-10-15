import BasketService from "#root/adapters/store-service/BasketAdapter";

const BasketResolver = {
  Mutation: {
    async createBasket(obj, { seller, name, items, price, available }) {
      return await BasketService.createBasket({
        seller,
        name,
        items,
        price,
        available,
      });
    },
    async updateBasket({ id, seller, name, items, price, available }) {
      return await BasketService.updateBasket(
        id,
        seller,
        name,
        items,
        price,
        available
      );
    },
    async deleteBasket({ basketId }) {
      return await BasketService.deleteBasket({ basketId });
    },
  },
  Query: {
    async baskets() {
      return await BasketService.getBaskets();
    },
    async basket({ basketId }) {
      return await BasketService.getProduct({ basketId });
    },
    async filterBasket({ filter }) {
      return await BasketService.filerBasket({ filter });
    },
  },
};

export default BasketResolver;
