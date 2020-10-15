import Order from "#root/models/Order";

export const filterOrder = async (req, res) => {
  try {
    if (!req.body.filter) return res.send({ msg: "Bad request" }).status(400);

    const filter = req.body.filter;

    const filteredOrder = Order.find({ [filter.name]: filter.value });

    return res.json(filteredOrder).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    if (!orders) return res.json("No se encontraron canastas").status(200);

    return req.json(orders).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);

    if (!order)
      return res.send({ msg: "No se encontro la factura" }).status(400);

    return res.send(order).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const createOrder = async (req, res) => {
  try {
    const {
      seller,
      client,
      complete,
      actualLocation,
      deliveryDate,
      destiny,
      items,
      total,
      carrier,
    } = req.body;

    if (
      !seller &&
      !client &&
      !complete &&
      !actualLocation &&
      !deliveryDate &&
      !destiny &&
      !items &&
      !total &&
      !carrier
    )
      return res.json("Parametros incompletos").status(400);

    const newOrder = await new Order({
      seller,
      client,
      complete,
      actualLocation,
      deliveryDate,
      destiny,
      items,
      total,
      carrier,
    });

    const savedOrder = await newOrder.save();

    return res.json({ msg: "Orden Creada", savedOrder }).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const updateOrder = async (req, res) => {
  try {
    if (!req.params.id) return res.json("Parametros incompletos").status(400);

    const id = req.params.id;
    const {
      seller,
      client,
      complete,
      actualLocation,
      deliveryDate,
      destiny,
      items,
      total,
      carrier,
    } = req.body;

    if (
      !seller &&
      !client &&
      !complete &&
      !actualLocation &&
      !deliveryDate &&
      !destiny &&
      !items &&
      !total &&
      !carrier
    )
      return res.json("Parametros incompletos").status(400);

    const updatedOrder = await Order.findByIdAndUpdate(id, {
      seller,
      client,
      complete,
      actualLocation,
      deliveryDate,
      destiny,
      items,
      total,
      carrier,
    });

    return res.json({ msg: "Order actualizada", updatedOrder }).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    if (!req.params.id) return res.json("Parametros incompletos").status(400);

    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (deletedOrder)
      return res.json({ message: "Orden eliminada" }).status(200);

    return res.json({ message: "No se encontro ninguna orden" }).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};
