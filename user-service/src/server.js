import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./db/database";
import userRoutes from "#root/routes/UserRoutes";
import adminRoutes from "#root/routes/AdminRoutes";
import CarrierRoutes from "#root/routes/CarrierRoutes";
import ClientRoutes from "#root/routes/ClientRoutes";

const app = express();

console.log(process.env.C_NAME);

app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
//Configuraciones
app.set("PORT", process.env.PORT);

//middlewares
app.use(cors());

//routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/carrier", CarrierRoutes);
app.use("/api/client", ClientRoutes);

export default app;
