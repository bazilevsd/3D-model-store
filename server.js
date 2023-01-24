require("dotenv").config();

/**
 * Requirements
 */
const express = require("express");
const app = express();

//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");

/**
 * Configuration
 */
const PORT = 3000;

/**
 * Controllers
 */
// Our controller will eventually go here!

//connect to database
const db = require("./db");
db.once("open", () => {
  console.log("connected to mongo");
});

/**
 * Middleware
 */

//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// Basic index route!
app.get("/", (req, res) => {
  res.send("Ready!");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
