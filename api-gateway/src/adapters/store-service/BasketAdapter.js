import got from "got";

const STORE_SERVICE_URI = "http://store-service:7101/api/";

export default class BasketService {
  static async createBasket({ seller, name, items, price, available }) {
    const body = await got
      .post(`${STORE_SERVICE_URI}/baskets`, {
        json: {
          seller,
          name,
          items,
          price,
          available,
        },
      })
      .json();
    return body;
  }

  static async getBasket({ BasketId }) {
    const body = await got
      .get(`${STORE_SERVICE_URI}/basket/${BasketId}`)
      .json();

    return body;
  }

  static async filterBasket({ filter }) {
    const body = await got
      .get(`${STORE_SERVICE_URI}/basket/filter`, {
        json: {
          filter,
        },
      })
      .json();

    return body;
  }

  static async updateBasket({ id, seller, name, items, price, available }) {
    const body = await got
      .put(`${STORE_SERVICE_URI}/basket/${id}`, {
        json: {
          seller,
          name,
          items,
          price,
          available,
        },
      })
      .json();
    return body;
  }

  static async deleteBasket({ basketId }) {
    const body = await got
      .delete(`${STORE_SERVICE_URI}/basket/${basketId}`)
      .json();

    return body;
  }

  static async getBaskets() {
    const body = await got.get(`${STORE_SERVICE_URI}/baskets`).json();

    return body;
  }
}
