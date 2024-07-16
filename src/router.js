const express = require('express');
const router = express.Router();
const shoesController = require('./controllers/shoesController');

router.get('/', (req, res) => {
    res.send('A rota é /shoes');
});
router.get('/shoes', shoesController.listShoes);


module.exports = router;