const mongoose = require('mongoose');
async function connect (){
    try{
    await mongoose.connect('mongodb://localhost:27017/hospitals');
    console.log("da ket noi")
    }
    catch(error){
    console.log("false")
    }
}
module.exports={connect}