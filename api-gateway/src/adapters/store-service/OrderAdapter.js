import got from "got";

const STORE_SERVICE_URI = "http://store-service:7101/api/";

export default class OrderService {
  static async createOrder({
    seller,
    client,
    actualLocation,
    deliveryDate,
    destiny,
    items,
    total,
    carrier,
  }) {
    const body = await got
      .post(`${STORE_SERVICE_URI}/orders`, {
        json: {
          seller,
          client,
          actualLocation,
          deliveryDate,
          destiny,
          items,
          total,
          carrier,
        },
      })
      .json();
    return body;
  }

  static async getOrder({ orderId }) {
    const body = await got.get(`${STORE_SERVICE_URI}/order/${orderId}`).json();

    return body;
  }

  static async filterOrder({ filter }) {
    const body = await got
      .get(`${STORE_SERVICE_URI}/order/filter`, {
        json: {
          filter,
        },
      })
      .json();

    return body;
  }

  static async updateOrder({
    id,
    complete,
    actualLocation,
    deliveryDate,
    destiny,
    items,
    total,
  }) {
    const body = await got
      .put(`${STORE_SERVICE_URI}/order/${id}`, {
        json: {
          complete,
          actualLocation,
          deliveryDate,
          destiny,
          items,
          total,
        },
      })
      .json();
    return body;
  }

  static async deleteOrder({ orderId }) {
    const body = await got
      .delete(`${STORE_SERVICE_URI}/order/${orderId}`)
      .json();

    return body;
  }

  static async getOrders() {
    const body = await got.get(`${STORE_SERVICE_URI}/orders`).json();

    return body;
  }
}
