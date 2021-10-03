const Services = require('../services/Services');

const services = new Services;

class CitiesController{

    static async getCities(req, res) {
        try{
            const allCities = await services.getAllCities(req);
            res.json(allCities);
            return res.status(200);

        }catch(error){
            return res.status(500);

        }
    }
}

module.exports = CitiesController;