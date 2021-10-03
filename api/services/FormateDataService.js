const Models = require('../models/models');
const models = new Models; 

class FormateDataServices{

    
    async formateData(){
        const data = await models.getData();
        const dataFormate = [];
        data.forEach((location) =>{
            dataFormate.push({
                id: location.id,
                name: location.nome,
                state: location.microrregiao.mesorregiao.UF.nome,
                uf: location.microrregiao.mesorregiao.UF.sigla,
                region:location.microrregiao.mesorregiao.UF.regiao.nome
            })

        })


        return dataFormate;
    }

}



module.exports = FormateDataServices;