const express = require('express');
const cities = require('./citiesRoute');


module.exports = app =>{
    app.use(express.json());
    app.use(cities);
    
}