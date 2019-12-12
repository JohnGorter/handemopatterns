let { cars } = require('../models/cars.js');
let { index } = require('../views/index.js');


module.exports.homecontroller = {
    getAll(cb){
         cars.getCars((data) => { 
             cb(index.render(data));
         })
    },

    
}