import express from "express";
const router = express.Router();
const {
  sendMessage,
  getConversation,
} = require("../controllers/MessageController");

// POST /api/messages
router.post("/", sendMessage);

// GET /api/messages/:userId1/:userId2
router.get("/:userId1/:userId2", getConversation);

module.exports = router;
