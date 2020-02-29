const express = require('express');
const { castVote } = require('../controllers/castVote');
const router = express.Router();

router.route('/').post(castVote);

module.exports = castVote;