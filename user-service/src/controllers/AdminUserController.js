import jwt from "jsonwebtoken";
import AdminUser from "#root/models/AdminUser";
import hashPassword from "#root/utils/hashPassword";
import passwordCompareSync from "#root/utils/passwordCompareSync";

export const signin = async (req, res) => {
  console.log(req.body);

  const user = await AdminUser.findOne({ email: req.body.email });

  if (!user) return res.status(400).json("invalid email or password");

  if (!passwordCompareSync(req.body.password, user.password))
    return res.status(400).json("invalid email or password");

  const token = await jwt.sign({ _id: user.id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

  return res.header("auth-token", token).json(user);
};

export const signup = async (req, res) => {
  console.log(req.body);

  const user = new AdminUser({
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
  });

  user.password = await hashPassword(user.password);

  const savedUser = await user.save();

  const token = jwt.sign({ _id: savedUser._id }, process.env.SECRET_KEY);

  return res.header("auth-token", token).json(savedUser);
};
