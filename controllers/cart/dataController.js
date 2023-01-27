const CartItem = require("../../models/cart");

const dataController = {
  index(req, res, next) {
    CartItem.find({}, (error, allItems) => {
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
    // Use Model to create CartItem Document
    CartItem.create(req.body, (error, createdCartItem) => {
      // Once created - respond to client
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.item = createdCartItem;
        next();
      }
    });
  },
  show(req, res, next) {
    CartItem.findById(req.params.id, (error, foundCartItem) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.item = foundCartItem;
        next();
      }
    });
  },
  update(req, res, next) {
    CartItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedCartItem) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.item = updatedCartItem;
          next();
        }
      }
    );
  },
  destroy(req, res, next) {
    CartItem.findByIdAndRemove(req.params.id, (error, item) => {
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
