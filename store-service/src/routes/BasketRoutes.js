import {
  createBasket,
  updateBasket,
  getBasket,
  filterBaskets,
  getBaskets,
  deleteBasket,
} from "#root/controllers/BasketController";

import { Router } from "express";
const basketRoutes = Router();

basketRoutes.get("/", (req, res) => {
  res.send("hello");
});

basketRoutes.get("/baskets", getBaskets);
basketRoutes.get("/basket/:id", getBasket);
basketRoutes.get("/baskets/filter", filterBaskets);
basketRoutes.post("/baskets", createBasket);
basketRoutes.put("/basket/:id", updateBasket);
basketRoutes.delete("/basket/:id", deleteBasket);

export default basketRoutes;
