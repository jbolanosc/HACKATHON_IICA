import { Router } from "express";
import { parser } from "#root/utils/imageConfig";

const userRoutes = Router();

import { signup, signin } from "#root/controllers/UserController";
//import { TokenValidation } from "./../libs/validateToken";

userRoutes.get("/", (req, res) => {
  res.send("hello from user service");
});

userRoutes.post("/signup", parser.single("image"), signup);
userRoutes.post("/signin", signin);
//authRoutes.post("/profile", TokenValidation, profile);

export default userRoutes;
