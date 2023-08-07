const app = require("./index");
const connect = require("./configs/db");
require("dotenv").config();

app.listen(process.env.PORT, async (req, res) => {
  try {
    await connect();
    console.log("LISTENING ON PORT " + process.env.PORT);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});
