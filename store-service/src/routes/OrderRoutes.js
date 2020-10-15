import {
  filterOrder,
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "#root/controllers/OrderController";

import { Router } from "express";
const orderRoutes = Router();

orderRoutes.get("/", (req, res) => {
  res.send("hello");
});

orderRoutes.get("/orders", getOrders);
orderRoutes.get("/order/:id", getOrder);
orderRoutes.get("/order/filter", filterOrder);
orderRoutes.post("/orders", createOrder);
orderRoutes.put("/order/:id", updateOrder);
orderRoutes.delete("/order/:id", deleteOrder);

export default orderRoutes;
