const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  customerId: { type: String },
  items: [
    {
      product: {
        _id: { type: String, required: true },
        name: { type: String },
        img: { type: String },
        price: { type: Number },
        unit: { type: Number },
      },
      unit: { type: Number, require: true },
    },
  ],
});

module.exports = mongoose.model("cart", CartSchema);
