const FormateDataService = require('./FormateDataService')
const formateDataService = new FormateDataService;
class Services{

    async getAllCities(req, res){
        const  {uf, name, state, region} = req.query;

        if(uf !== undefined){
 
            const filterUf =  await formateDataService.formateData(); 
             return filterUf.filter(location => location.uf === uf);




        }if(name !== undefined){
            const filterName = await formateDataService.formateData(); 
            return filterName.filter(location => location.name.toLowerCase().includes(name.toLowerCase()));

        }if(state !== undefined){
            const filterName = await formateDataService.formateData(); 
            return filterName.filter(location => location.state.toLowerCase().includes(state.toLowerCase()));

        }if(region !== undefined){
            const filterName = await formateDataService.formateData(); 
            return filterName.filter(location => location.region.toLowerCase().includes(region.toLowerCase()));

        }else{
            return formateDataService.formateData();
        }


    }

}

module.exports = Services;