const mongoose = require('mongoose');

let user = 'solonel';
let password = 'K4VMrR2YFqovfQU2';
let dbname = 'TodoApp';

const uri = `mongodb://${user}:${password}@solonel-shard-00-00-ppryc.mongodb.net:27017,solonel-shard-00-01-ppryc.mongodb.net:27017,solonel-shard-00-02-ppryc.mongodb.net:27017/${dbname}?ssl=true&replicaSet=solonel-shard-0&authSource=admin`
//const uri = `mongodb+srv://${user}:${password}@solonel-ppryc.mongodb.net/${dbname}`;

mongoose.Promise = global.Promise;
mongoose.connect(uri);

module.exports = {
    mongoose
}