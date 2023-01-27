const mongoose = require("mongoose");

const storeItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: Number, required: false },
});

const StoreItem = mongoose.model("StoreItem", storeItemSchema);

module.exports = StoreItem;
