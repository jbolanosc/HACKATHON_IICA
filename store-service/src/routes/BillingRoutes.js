import {
  getBilling,
  createBilling,
  filterBilling,
} from "#root/controllers/BillingController";

import { Router } from "express";
const billingRoutes = Router();

billingRoutes.get("/", (req, res) => {
  res.send("hello");
});

billingRoutes.get("/billing/:id", getBilling);
billingRoutes.get("/billing/filter", filterBilling);
billingRoutes.post("/billing", createBilling);

export default billingRoutes;
