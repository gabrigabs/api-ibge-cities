const FormateDataService = require('./FormateDataService')
const formateDataService = new FormateDataService;
class Services{

    
    async getAllCities(req){
        const  {uf, name, state, region} = req.query;


        if(uf !== undefined){

            this.uf = uf;
            const filterUf =  await formateDataService.formateData();  
            return filterUf.filter(location => location.uf === uf);


        }if(name !== undefined){
            this.name = name;
            const filterName = await formateDataService.formateData(); 
            return filterName.filter(location => location.name.toLowerCase().includes(name.toLowerCase()));

        }if(state !== undefined){
            this.state = state;
            const filterName = await formateDataService.formateData(); 
            return filterName.filter(location => location.state.toLowerCase().includes(state.toLowerCase()));

        }if(region !== undefined){
            this.region = region;
            const filterName = await formateDataService.formateData(); 
            return filterName.filter(location => location.region.toLowerCase().includes(region.toLowerCase()));

        }else{
            return formateDataService.formateData();
        }


    }

}

module.exports = Services;