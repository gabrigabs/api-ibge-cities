const Models = require('../models/models');
const models = new Models; 

class Services{

    
    async getAllCities(){
        const data = await models.getData();
        const dataFilter = [];
        data.forEach((location) =>{
            dataFilter.push({
                id: location.id,
                name: location.nome,
                state: location.microrregiao.mesorregiao.UF.nome,
                uf: location.microrregiao.mesorregiao.UF.sigla,
                region:location.microrregiao.mesorregiao.UF.regiao.nome
            })

        })


        return dataFilter;
    }

}



module.exports = Services;