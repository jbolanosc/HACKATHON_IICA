import Product from "#root/models/Product";

export const getProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    if (!product)
      return res.send({ msg: "No se encontro el producto" }).status(400);

    return res.send(product).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products)
      return res.send({ msg: "No se encontraron productos" }).status(200);

    return res.json(products).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const filterProducts = async (req, res) => {
  try {
    if (!req.body.filter) return res.send({ msg: "Bad request" }).status(400);

    const filter = req.body.filter;

    const filteredProducts = Product.find({ [filter.name]: filter.value });

    return res.json(filteredProducts).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      weight,
      productType,
      available,
      seller,
      price,
      season,
    } = req.body;

    if (
      !id &&
      !name &&
      !weight &&
      !productType &&
      !available &&
      !seller &&
      !price &&
      !season
    )
      return res.json("Parametros incompletos").status(400);

    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      weight,
      productType,
      available,
      seller,
      price,
      season,
      imagePath: req.file.url || "",
    });

    return res
      .json({ msg: "Producto actualizado", updatedProduct })
      .status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    if (!req.params.id) return res.json("ID invalido").status(400);

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (deletedProduct)
      return res.json({ message: "Producto eliminado" }).status(200);

    return res.json({ message: "No se encontro ningun producto" }).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      weight,
      productType,
      available,
      price,
      seller,
      season,
    } = req.body;

    if (
      !name &&
      !weight &&
      !productType &&
      !available &&
      !seller &&
      !price &&
      !season
    )
      return res.json("Parametros incompletos").status(400);

    const newProduct = {
      name,
      seller,
      weight,
      productType,
      available,
      price,
      season,
      imagePath: req.file.url || "",
    };

    const product = await Product.save(newProduct);

    return res.json({ msg: "Producto Guardado", product }).status(200);
  } catch (err) {
    return res.json(err).status(500);
  }
};
