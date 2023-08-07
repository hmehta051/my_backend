const mongoose = require("mongoose");
const URL =
  process.env.MONGO_URI ||
  "mongodb+srv://rawatmegha9354:PYduvzClwLiJoJsU@cluster0.jlkodts.mongodb.net/eval4";
module.exports = () => {
  return mongoose.connect(URL);
};
