const webRoutes = require("./web");
const adminRoutes = require("./admin");

module.exports = (app) => {
  app.use(webRoutes);
  app.use("/admin", adminRoutes); //Seteo como prefijo de las rutas el "admin"
};
