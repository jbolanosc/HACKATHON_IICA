import Billing from "#root/models/Billing";

export const filterBilling = async (req, res) => {
  try {
    if (!req.body.filter) return res.send({ msg: "Bad request" }).status(400);

    const filter = req.body.filter;

    const filteredBilling = Billing.find({ [filter.name]: filter.value });

    return res.json(filteredBilling).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const createBilling = async (req, res) => {
  try {
    const { seller, client, order } = req.body;

    const newBilling = new Billing({
      seller,
      client,
      order,
    });

    const billing = await newBilling.save();

    return res.json({ msg: "Factura Creada", billing }).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const getBilling = async (req, res) => {
  try {
    const { billingId } = req.params;

    const billing = await Billing.findById(billingId);

    if (!billing)
      return res.send({ msg: "No se encontro la factura" }).status(400);

    return res.send(billing).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};
