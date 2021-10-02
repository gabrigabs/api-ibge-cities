const axios = require('axios');

class Models{
    async getData(){
        const {data} = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
        return data;

    }
}

module.exports = Models;