const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    postedAt: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          const pattern = /^\d{4}-\d{2}-\d{2}$/;
          return pattern.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid date in the format YYYY-MM-DD!`,
      },
    },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = new mongoose.model("products", productSchema);
