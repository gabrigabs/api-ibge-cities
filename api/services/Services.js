const axios = require('axios');

class Services{

    
    async getAllCities(){
        console.log('teste');
        const {data} = await axios('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
        return data;
    }

}



module.exports = Services;