const router = require("express").Router();

const renderPage = (res, page) => {
  res.render(page, { page });
};

router.get("/", (req, res) => {
  renderPage(res, "home");
});

router.get("/donate", (req, res) => {
  renderPage(res, "donate");
});

router.get("/about", (req, res) => {
    renderPage(res, "about");
  });

router.get("/team", (req, res) => {
  renderPage(res, "team");
});

router.get("/events", (req, res) => {
  renderPage(res, "events");
});

router.get("/events/camp", (req, res) => {
  renderPage(res, "camp");
});

router.get("/events/pilot", (req, res) => {
  renderPage(res, "pilot");
});

router.get("/events/second", (req, res) => {
  renderPage(res, "second");
});

router.get("/add-event", (req, res) => {
  renderPage(res, "add-event");
});


router.get("*", (req, res) => {
    renderPage(res, "404"); 
  });
  

module.exports = router;
