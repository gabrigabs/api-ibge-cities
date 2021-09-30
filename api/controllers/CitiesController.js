const Services = require('../services/Services');
const services = new Services;

class CitiesController{

    static async getCities(req, res){
        try{
            const allCities = await services.getAllCities();
            console.log('teste2');

            res.json(allCities);
            return res.status(200);

        }catch{
            return res.status(500);

        }
    }
}

module.exports = CitiesController;