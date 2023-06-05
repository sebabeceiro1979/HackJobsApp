const express = require("express");
const router = express.Router();

const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.get("/", pagesController.showHome);
router.get("/trabajos", pagesController.showJobs);
router.get("/trabajos/:slug", pagesController.showJob);

router.get("/login", pagesController.showLogin);
router.post("/login", authController.login);

router.get("/register", pagesController.showRegister);
router.post("/register", userController.store);

module.exports = router;
