const { Router } = require('express');
const CitiesController = require('../controllers/CitiesController');

const router = Router();

router.get('/api/city', CitiesController.getCities);

module.exports = router;