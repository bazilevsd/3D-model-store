require("dotenv").config();

/**
 * Requirements
 */
const express = require("express");
const app = express();

/**
 * Configuration
 */
const PORT = process.env.PORT | 3000;

/**
 * Controllers
 */

const storeController = require("./controllers/store/storeController");
const userController = require("./controllers/user/userController");
const cartController = require("./controllers/cart/cartController");

//connect to database
const db = require("./db");
db.once("open", () => {
  console.log("connected to mongo");
});

/**
 * Middleware
 */
const setupMiddleware = require("./middleware/setupMiddleware");

setupMiddleware(app);

/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

/**
 * Controllers
 */

app.use("/store", storeController);
app.use("/user", userController);
app.use("/cart", cartController);

const StoreItem = require("./models/store");
// We are just going to redirect to /fruits if the user goes to our base route
app.get("/", (req, res) => {
  res.redirect("/store/");
  //   StoreItem.find({}, (err, posts) => {
  //     res.render("Index", {
  //       posts,
  //     });
  //   });
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
