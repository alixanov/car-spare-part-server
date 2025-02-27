const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  model: { type: String, required: true },
  stock: { type: Number, required: true },
  product_category: { type: String, required: true },
  purchase_price: { type: Number, required: true },
  sell_price: { type: Number, required: true },
  brand_name: { type: String },
  storeProduct: { type: Boolean, default: false },
  count_type: { type: String, required: true },
  packing_type: { type: String },
  barcode: { type: String, required: true, unique: true },
  special_notes: { type: String },
  kimdan_kelgan: { type: String, required: true }, // Yangi qo'shilgan maydon
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
