let express = require('express');
let app = express(); 
let { homecontroller } = require('./controllers/homecontroller.js');
let controllers = { homecontroller }; 





app.get('/:controller/:action', (req, res) =>{
    controllers[req.params.controller][req.params.action](
        (result) => res.end(result)
    ); 
    
});

app.get('/:controller/:action/:id', (req, res) =>{
    let result = controllers[req.params.controller][req.params.action](req.params.id); 
    res.end(result);
});

app.listen(8080, () =>{
    console.log("I am ready");
});