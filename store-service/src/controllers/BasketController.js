import Basket from "#root/models/Basket";

export const createBasket = async (req, res) => {
  try {
    const { seller, name, items, price, available } = req.body;

    if (!seller && !name && !items && !price && !available)
      return res.json("Parametros Invalidos").status(400);

    const newBasket = new Basket({
      seller,
      name,
      items,
      price,
      available,
    });

    const basket = await newBasket.save();

    return res.json({ msg: "Canasata Guardado", basket }).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const updateBasket = async (req, res) => {
  const id = req.params.id;
  const { seller, name, items, price, available } = req.body;

  if (!id && !seller && !name && !items && !price && !available)
    return res.json("Parametros Invalidos").status(400);

  const updatedBasket = await Basket.findByIdAndUpdate(id, {
    seller,
    name,
    items,
    price,
    available,
  });

  return res.json({ msg: "Canasta actualizada", updatedBasket });
};

export const getBasket = async (req, res) => {
  try {
    const { id } = req.params;

    const basket = await Basket.findById(id);

    if (!basket)
      return res.send({ msg: "No se encontro la canasta" }).status(400);

    return res.send(basket).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const filterBaskets = async (req, res) => {
  try {
    if (!req.body.filter) return res.send({ msg: "Bad request" }).status(400);

    const filter = req.body.filter;

    const filteredBaskets = Basket.find({ [filter.name]: filter.value });

    return res.json(filteredBaskets).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const getBaskets = async (req, res) => {
  try {
    const baskets = await Basket.find();

    if (!baskets) return res.json("No se encontraron canastas").status(200);

    return req.json(baskets).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const deleteBasket = async (req, res) => {
  try {
    if (!req.params.id) return res.json("ID invalido").status(400);

    const deletedBasket = await Basket.findByIdAndDelete(req.params.id);

    if (deletedBasket)
      return res.json({ message: "Canasta eliminada" }).status(200);

    return res.json({ message: "No se encontro ninguna canasta" }).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};
