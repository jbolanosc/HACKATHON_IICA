import jwt from "jsonwebtoken";
import Carrier from "#root/models/Carrier";
import hashPassword from "#root/utils/hashPassword";
import passwordCompareSync from "#root/utils/passwordCompareSync";

export const signin = async (req, res) => {
  console.log(req.body);

  const carrier = await Carrier.findOne({ email: req.body.email });

  if (!carrier) return res.status(400).json("invalid email or password");

  if (!passwordCompareSync(req.body.password, carrier.password))
    return res.status(400).json("invalid email or password");

  const token = await jwt.sign({ _id: carrier.id }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60,
  });

  return res.header("auth-token", token).json(user);
};

export const signup = async (req, res) => {
  console.log(req.body);

  const carrier = new Carrier({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
    phoneNumber: req.body.phoneNumber,
    vehicle: req.body.vehicle,
    vehicleCapacity: req.body.vehicleCapacity,
    imagePath: req.file.path || "",
  });

  await upload(req, res);

  console.log(req.file);
  if (req.file == undefined) {
    return res.send(`Debes seleccionar un archivo.`);
  }

  carrier.password = await hashPassword(carrier.password);

  const savedCarrier = await user.save();

  const token = jwt.sign({ _id: savedCarrier._id }, process.env.SECRET_KEY);

  return res.header("auth-token", token).json(savedCarrier);
};

export const profile = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) return res.json("ID invalido").status(400);

    const carrier = await Carrier.findById(id);

    if (!user)
      return res.json("No se encontro el usuario solicitado").status(400);

    return res.send(carrier).status(200);
  } catch (ex) {
    return res.json(err).status(500);
  }
};
