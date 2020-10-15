import {
  getProduct,
  getProducts,
  filterProducts,
  updateProduct,
  deleteProduct,
  createProduct,
} from "#root/controllers/ProductController";
import { Router } from "express";
import { parser } from "#root/utils/imageConfig";

const productRoutes = Router();

productRoutes.get("/", (req, res) => {
  res.send("hello");
});

productRoutes.get("/products", getProducts);
productRoutes.get("/product/:id", getProduct);
productRoutes.get("/products/filter", filterProducts);
productRoutes.post("/products", parser.single("image"), createProduct);
productRoutes.put("/product/:id", parser.single("image"), updateProduct);
productRoutes.delete("/product/:id", deleteProduct);

export default productRoutes;
