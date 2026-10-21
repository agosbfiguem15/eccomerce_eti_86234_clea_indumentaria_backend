import Product from "../models/product.model.js"

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    return res.status(200).send({
      success: true,
      message: "Productos obtenidos correctamente",
      products: products
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: "Error al obtener los productos"
    });
  }
}

export async function getProductsById(req, res) {
  try {
    const id = req.params.id
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Producto no encontrado"
      });
    }
    return res.status(200).send({
      success: true,
      message: "Obteniendo productos por ID",
      product: product
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: "Error al obtener el producto"
    });
  }
}

export async function createProduct(req, res) {
  try {
    req.body.createdAt = undefined;
    const newProduct = new Product(req.body);
    console.log(newProduct);
    await newProduct.save();
    return res.status(201).send({
      success: true,
      newProduct: newProduct,
      message: "Producto creado correctamente"
    });
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      return res.status(400).send({
        success: false,
        message: "Error de validación"
      });
    }
    return res.status(500).send({
      success: false,
      message: "Error al crear el producto"
    });
  }
}

export async function updateProduct(req, res) {
  try {
    const id = req.params.id
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!updateProduct) {
      return res.status(404).send({
        success: false,
        message: "Producto no encontrado"
      });
    }
    return res.status(200).send({
      success: true,
      message: "Producto actualizado correctamente",
      updateProduct: updateProduct
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: "Error al actualizar el producto"
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    const id = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(id)
    if (!deleteProduct) {
      return res.status(404).send({
        success: false,
        message: "Producto no encontrado"
      });
    }
    return res.status(200).send({
      success: true,
      message: "Producto eliminado correctamente",
      product: deletedProduct
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: "Error al eliminar el producto"
    });
  }
}
