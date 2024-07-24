const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    customerId: { type: String },
    items: [
      {
        product: {
          _id: { type: String, required: true },
          name: { type: String },
          banner: { type: String },
          desc: { type: String },
          type: { type: String },
          suplier: { type: String },
          price: { type: Number },
          unit: { type: Number },
        },
        unit: { type: Number, require: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", CartSchema);
