import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
  minLength: 3,
  maxLength: 50,
  trim: true
 },
 price: {
  type: Number,
  required: true,
  min: 1
 },
 description: {
  type: String,
  required: true,
  minLength: 10,
  maxLength: 100,
  trim: true
 },
 category: {
  type: String,
  required: true,
  uppercase: true
 },
 image: {
  type: String,
  required: true,
  trim: true
 },
 stock: {
  type: Number,
  min: 0,
  default: 0
 },
 height: {
  type: Number,
  required: true,
  min: 1
 },
 width: {
  type: Number,
  required: true,
  min: 1
 },
 depth: {
  type: Number,
  default: 0
 }
}, { timestamps: true})

const Product = mongoose.model("Product", productSchema);

export default Product;

