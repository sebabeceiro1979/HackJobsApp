const bcryptjs = require("bcryptjs");
const { User } = require("../models");

module.exports = {
  // store: async (req, res) => {
  //   // primero busco por email
  //   const user = await User.findOne({
  //     email: req.bod.email,
  //   });
  //   // si existe
  //   if (user) {
  //     // devuelvo error
  //   } else {
  //     // creo el usuario
  //     await User.create({
  //       firstname: req.body.firstname,
  //       lastname: req.body.lastnam,
  //       email: req.body.email,
  //       passwrod: req.body.passwrod,
  //     });
  //   }
  // },
  store: async (req, res) => {
    const [user, created] = await User.findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: await bcryptjs.hash(req.body.password, 10),
      },
    });

    if (created) {
      req.login(user, function () {
        res.redirect("/admin/ofertas");
      });
    } else {
      req.flash("error", "Lo sentimos, el usuario ya existe en el sistema.");
      res.redirect("back");
    }
  },
};
