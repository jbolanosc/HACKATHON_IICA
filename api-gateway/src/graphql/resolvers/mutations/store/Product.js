import ProductService from "#root/adapters/store-service/ProductAdapter";

const ProductResolver = {
  Mutation: {
    async createProduct(
      obj,
      { name, weight, seller, productType, season, available, price, imagePath }
    ) {
      return await ProductService.createProduct({
        name,
        weight,
        seller,
        productType,
        season,
        available,
        price,
        imagePath,
      });
    },
    async updateProduct({
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
      return await ProductService.updateProduct(
        id,
        name,
        weight,
        productType,
        season,
        available,
        price,
        imagePath,
        rating
      );
    },
    async deleteProduct({ productId }) {
      return await ProductService.deleteProduct({ productId });
    },
  },
  Query: {
    async products() {
      return await ProductService.getProducts();
    },
    async product({ productId }) {
      return await ProductService.getProduct({ productId });
    },
    async filterProduct({ filter }) {
      return await ProductService.filerProduct({ filter });
    },
  },
};

export default ProductResolver;
