const { Router } = require('express');
const CitiesController = require('../controllers/CitiesController');

const router = Router();

router.get('/cities', CitiesController.getCities);

module.exports = router;