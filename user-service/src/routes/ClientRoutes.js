import { Router } from "express";
const clientRoutes = Router();

import { signup, signin } from "#root/controllers/ClientController";
//import { TokenValidation } from "./../libs/validateToken";

clientRoutes.get("/", (req, res) => {
  res.send("hello");
});

clientRoutes.post("/signup", signup);
clientRoutes.post("/signin", signin);
//authRoutes.post("/profile", TokenValidation, profile);

export default clientRoutes;
