import OrderService from "#root/adapters/store-service/OrderAdapter";

const OrderResolver = {
  Mutation: {
    async createOrder(
      obj,
      {
        seller,
        client,
        actualLocation,
        deliveryDate,
        destiny,
        items,
        total,
        carrier,
      }
    ) {
      return await OrderService.createOrder({
        seller,
        client,
        actualLocation,
        deliveryDate,
        destiny,
        items,
        total,
        carrier,
      });
    },
    async updateOrder({
      id,
      complete,
      actualLocation,
      deliveryDate,
      destiny,
      items,
      total,
    }) {
      return await OrderService.updateOrder(
        id,
        complete,
        actualLocation,
        deliveryDate,
        destiny,
        items,
        total
      );
    },
    async deleteOrder({ orderId }) {
      return await OrderService.deleteOrder({ orderId });
    },
  },
  Query: {
    async orders() {
      return await OrderService.getOrder();
    },
    async order({ OrderId }) {
      return await OrderService.getOrder({ OrderId });
    },
    async filterOrder({ filter }) {
      return await OrderService.filterOrder({ filter });
    },
  },
};

export default OrderResolver;
