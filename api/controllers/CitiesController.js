const Services = require('../services/Services');

const services = new Services;

class CitiesController{

    static async getCities(req, res) {
        try{

            const uf = req.query.uf;
            const name = req.query.name;
            const state = req.query.state;
            const region = req.query.region;
            const allCities = await services.getAllCities(req);


            if(uf == null){
                if(!allCities.length){
                    return res.status(404).json({message: "no city was found with the given parameters"});
                }else{
                    return res.status(200).json(allCities);
                }
                
            }else{
                if (uf !== uf.toUpperCase()) {
                    return res.status(400).json({message: "invalid uf field, its value must be upper case"});
                }else if(uf.length !== 2){
                    return res.status(400).json({message: "the uf field must have only two letters"});
                }else if(!allCities.length){
                    return res.status(404).json({message: "no city was found with the given parameters"});
                
                }else{
                    return res.status(200).json(allCities);
                }
            }



        }catch(error){
            res.json(error);


        }
    }
}

module.exports = CitiesController;