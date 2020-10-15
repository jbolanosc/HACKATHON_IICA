import { Router } from "express";
import { parser } from "#root/utils/imageConfig";
const CarrierRoutes = Router();

import { signup, signin } from "#root/controllers/CarrierController";
//import { TokenValidation } from "./../libs/validateToken";

CarrierRoutes.get("/", (req, res) => {
  res.send("hello");
});

CarrierRoutes.post("/signup", parser.single("image"), signup);
CarrierRoutes.post("/signin", signin);
//authRoutes.post("/profile", TokenValidation, profile);

export default CarrierRoutes;
