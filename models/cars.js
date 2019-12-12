var admin = require("firebase-admin");
var serviceAccount = require("./account.json");

var app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todoapp-7013c.firebaseio.com"
});


module.exports.cars = {
    getCars(cb){
        app.database().ref('/cars').once('value', (data) =>{
           cb(data.val());
        });
    }
}