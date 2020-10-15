import got from "got";

const STORE_SERVICE_URI = "http://store-service:7101/api/";

export default class BillingService {
  static async createBilling({ seller, client, order }) {
    const body = await got
      .post(`${STORE_SERVICE_URI}/products`, {
        json: {
          seller,
          client,
          order,
        },
      })
      .json();
    return body;
  }

  static async getBilling({ billingId }) {
    const body = await got
      .get(`${STORE_SERVICE_URI}/billing/${billingId}`)
      .json();

    return body;
  }

  static async filterBilling({ filter }) {
    const body = await got
      .get(`${STORE_SERVICE_URI}/billing/filter`, {
        json: {
          filter,
        },
      })
      .json();

    return body;
  }
}
