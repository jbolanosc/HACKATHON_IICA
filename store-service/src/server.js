import "dotenv/config";
import express from "express";
import cors from "cors";
import "./db/database";
import productRoutes from "#root/routes/ProductRoutes";
import orderRoutes from "#root/routes/OrderRoutes";
import billingRoutes from "#root/routes/BillingRoutes";
import basketRoutes from "#root/routes/BasketRoutes";

const app = express();

//Configuraciones
app.set("PORT", process.env.PORT);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", billingRoutes);
app.use("/api", basketRoutes);

export default app;
