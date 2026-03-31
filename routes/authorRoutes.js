const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorcontroller");

router.post("/", authorController.createAuthor);
router.get("/", authorController.getAuthors);
router.get("/:id", authorController.getAuthor);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;