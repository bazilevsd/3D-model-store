const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: Number, required: false },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
