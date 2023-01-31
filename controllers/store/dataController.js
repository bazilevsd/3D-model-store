const StoreItem = require("../../models/store");
const router = require("./storeController");

const dataController = {
  index(req, res, next) {
    StoreItem.find({}, (error, allItems) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.items = allItems;
        console.log("allItems", allItems);
        next();
      }
    });
  },

  create(req, res, next) {
    req.body.username = req.session.username;
    // Use Model to create StoreItem Document
    StoreItem.create(req.body, (error, createdStoreItem) => {
      // Once created - respond to client
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.item = createdStoreItem;
        next();
      }
    });
  },
  show(req, res, next) {
    StoreItem.findById(req.params.id, (error, foundStoreItem) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.item = foundStoreItem;
        next();
      }
    });
  },
  update(req, res, next) {
    StoreItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedStoreItem) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.item = updatedStoreItem;
          next();
        }
      }
    );
  },
  destroy(req, res, next) {
    StoreItem.findByIdAndRemove(req.params.id, (error, item) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.item = item;
        next();
      }
    });
  },
};

module.exports = dataController;
