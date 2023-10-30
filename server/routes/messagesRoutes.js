const router = require('express').Router();
const {
  addMessage,
  getAllMessage,
} = require('../controllers/messagesController');

router.post('/addMessage', addMessage);
router.post('/getAllMessage', getAllMessage);

module.exports = router;
