import { Router  } from "express"
import { createProduct, deleteProduct, getProducts, getProductsById, updateProduct } from "../controllers/product.controller.js"

const router = Router()

router.get("/products", getProducts)
router.get("/products/:id", getProductsById)
router.put("/products/:id", updateProduct)
router.post("/products", createProduct)
router.delete("/products/:id", deleteProduct)

export default router