const mongoose = require('mongoose');

let user = 'solonel';
let password = 'K4VMrR2YFqovfQU2';
let dbname = 'TodoApp';

const uri = `mongodb://${user}:${password}@solonel-shard-00-00-ppryc.mongodb.net:27017,solonel-shard-00-01-ppryc.mongodb.net:27017,solonel-shard-00-02-ppryc.mongodb.net:27017/${dbname}?ssl=true&replicaSet=solonel-shard-0&authSource=admin`
//const uri = `mongodb+srv://${user}:${password}@solonel-ppryc.mongodb.net/${dbname}`;

mongoose.connect(uri);

var db = mongoose.connection;

var todoSchema = mongoose.Schema({
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

mongoose.Promise = global.Promise;

var Todo = mongoose.model('todos', todoSchema);

var newTodo = new Todo({
    text: 'Monter les meubles de la cuisine'
});

newTodo.save().then((doc) => {
    console.log('Saved : ', doc);
}, (err) => {
    console.error('Error : ', err);
});