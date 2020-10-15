import { Router } from "express";
const adminRoutes = Router();

import { signup, signin } from "#root/controllers/AdminUserController";
//import { TokenValidation } from "./../libs/validateToken";

adminRoutes.get("/", (req, res) => {
  res.send("hello");
});

adminRoutes.post("/signup", signup);
adminRoutes.post("/signin", signin);
//authRoutes.post("/profile", TokenValidation, profile);

export default adminRoutes;
