const RESOURCE_PATH = "/cart";

const viewController = {
  index(req, res) {
    res.render("cart/Index", res.locals.data);
  },

  show(req, res) {
    res.render("cart/Show", {
      _id: res.locals.data.item._id,
      name: res.locals.data.item.name,
      image: res.locals.data.item.image,
      price: res.locals.data.item.price,
    });
    console.log("my show data", res.locals.data);
  },
  edit(req, res) {
    res.render("cart/Edit", res.locals.data);
  },
  newView(req, res) {
    res.render("cart/New");
  },
  redirectHome(req, res) {
    res.redirect(RESOURCE_PATH);
  },
  redirectShow(req, res) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`);
  },
};

module.exports = viewController;
