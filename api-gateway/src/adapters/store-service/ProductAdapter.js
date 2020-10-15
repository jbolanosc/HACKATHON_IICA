import got from "got";

const STORE_SERVICE_URI = "http://store-service:7101/api/";

export default class ProductService {
  static async createProduct({
    name,
    weight,
    seller,
    productType,
    season,
    available,
    price,
    imagePath,
  }) {
    const body = await got
      .post(`${STORE_SERVICE_URI}/products`, {
        json: {
          name,
          weight,
          seller,
          productType,
          season,
          available,
          price,
          imagePath,
        },
      })
      .json();
    return body;
  }

  static async getProduct({ productId }) {
    const body = await got
      .get(`${STORE_SERVICE_URI}/product/${productId}`)
      .json();

    return body;
  }

  static async filterProduct({ filter }) {
    const body = await got
      .get(`${STORE_SERVICE_URI}/product/filter`, {
        json: {
          filter,
        },
      })
      .json();

    return body;
  }

  static async updateProduct({
    id,
    name,
    weight,
    productType,
    season,
    available,
    price,
    imagePath,
    rating,
  }) {
    const body = await got
      .put(`${STORE_SERVICE_URI}/product/${id}`, {
        json: {
          name,
          weight,
          productType,
          season,
          available,
          price,
          imagePath,
          rating,
        },
      })
      .json();
    return body;
  }

  static async deleteProduct({ productId }) {
    const body = await got
      .delete(`${STORE_SERVICE_URI}/product/${productId}`)
      .json();

    return body;
  }

  static async getProducts() {
    const body = await got.get(`${STORE_SERVICE_URI}/product`).json();

    return body;
  }
}
