const router = require("express").Router();

const eventController = require("../controllers/eventController");

const multer = require("../../config/multer");

const cpUpload = multer.fields([
  { name: "event-image-1", maxCount: 1 },
  { name: "event-image-2", maxCount: 1 },
  { name: "event-image-3", maxCount: 1 },
]);

router.post("/create", cpUpload, eventController.createEvent);

module.exports = router;