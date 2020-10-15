import jwt from "jsonwebtoken";
import User from "#root/models/User";
import hashPassword from "#root/utils/hashPassword";
import passwordCompareSync from "#root/utils/passwordCompareSync";

export const signin = async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json("invalid email or password");

    if (!passwordCompareSync(req.body.password, user.password))
      return res.status(400).json("invalid email or password");

    const token = await jwt.sign({ _id: user.id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });

    return res.header("auth-token", token).json(user);
  } catch (err) {
    res.json(err).status(500);
  }
};

export const signup = async (req, res) => {
  try {
    console.log(req.file.path);
    if (req.file == undefined) {
      return res.send(`Debes seleccionar un archivo.`);
    }
    const user = new User({
      fullName: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
      phoneNumber: req.body.phoneNumber,
      imagePath: req.file.path || "",
    });

    user.password = await hashPassword(user.password);

    const savedUser = await user.save();
    const token = await jwt.sign(
      { _id: savedUser.id },
      process.env.SECRET_KEY,
      {
        expiresIn: 60 * 60,
      }
    );
    return res.header("auth-token", token).json(savedUser);
  } catch (err) {
    res.json(err).status(500);
  }
};

export const profile = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) return res.json("ID invalido").status(400);

    const user = await User.findById(id);

    if (!user)
      return res.json("No se encontro el usuario solicitado").status(400);

    return res.send(user).status(200);
  } catch (ex) {
    return res.json(err).status(500);
  }
};
