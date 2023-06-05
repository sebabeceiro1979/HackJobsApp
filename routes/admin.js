const express = require("express");
const router = express.Router();
const jobsController = require("../controllers/jobController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

router.get("/ofertas", ensureAuthenticated, jobsController.index);
router.get("/ofertas/crear", ensureAuthenticated, jobsController.create);
router.post("/ofertas/crear", ensureAuthenticated, jobsController.store);

router.get("/ofertas/editar/:id", ensureAuthenticated, jobsController.edit);
router.post("/ofertas/editar/:id", ensureAuthenticated, jobsController.update);

router.get(
  "/ofertas/eliminar/:id",
  ensureAuthenticated,
  jobsController.destroy
);

module.exports = router;
