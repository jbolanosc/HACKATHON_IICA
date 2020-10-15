import jwt from "jsonwebtoken";
import Client from "#root/models/Client";
import hashPassword from "#root/utils/hashPassword";
import passwordCompareSync from "#root/utils/passwordCompareSync";

export const signin = async (req, res) => {
  console.log(req.body);

  const client = await Client.findOne({ email: req.body.email });

  if (!client) return res.status(400).json("invalid email or password");

  if (!passwordCompareSync(req.body.password, client.password))
    return res.status(400).json("invalid email or password");

  const token = await jwt.sign({ _id: client.id }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60,
  });

  return res.header("auth-token", token).json(client);
};

export const signup = async (req, res) => {
  console.log(req.body);

  const client = new Client({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
  });

  if (req.body.address) client.address.push(client);

  client.password = await hashPassword(client.password);

  const savedClient = await client.save();

  const token = jwt.sign({ _id: savedClient._id }, process.env.SECRET_KEY);

  return res.header("auth-token", token).json(savedClient);
};

export const profile = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) return res.json("ID invalido").status(400);

    const client = await Client.findById(id);

    if (!user)
      return res.json("No se encontro el usuario solicitado").status(400);

    return res.send(client).status(200);
  } catch (ex) {
    return res.json(err).status(500);
  }
};
