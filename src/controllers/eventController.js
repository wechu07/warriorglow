const Event = require("../models/Event");

const createEvent = async (req, res) => {
  try {
    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location,
      image: req.files["event-image-1"][0].filename,
      image2: req.files["event-image-2"][0].filename,
      image3: req.files["event-image-3"][0].filename,
    });
    await event.save();
    res.status(200).json({
      message: "Event created successfully",
      event,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { createEvent };