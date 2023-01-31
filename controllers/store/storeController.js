const express = require("express");
const router = express.Router();

// Data controller
const dataController = require("./dataController");
const viewController = require("./viewController");
const User = require("../../models/user");

const StoreItem = require("../../models/store");
const seed = require("../../seed");
async function saveData() {
  try {
    await StoreItem.create(seed);
  } catch (err) {
    console.log(err);
  }
}
//saveData();

/**
 * Store
 */
// Index
router.get("/", dataController.index, viewController.index);

// New
router.get("/new", viewController.newView);

// Show
router.get("/:id", dataController.show, viewController.show);

router.use((req, res, next) => {
  console.log("session", req.session);

  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});

// Delete
router.delete("/:id", dataController.destroy, viewController.redirectHome);

// Update
router.put("/:id", dataController.update, viewController.redirectShow);

// Create
router.post("/", dataController.create, viewController.redirectHome);

const admin = User.findOne({ username: "darya" });
router.use((req, res, next) => {
  console.log("session", req.session);

  if (req.session.loggedIn && admin) {
    next();
  } else {
    res.redirect("/user/login");
  }
});
// Edit
router.get("/:id/edit", dataController.show, viewController.edit);

module.exports = router;
