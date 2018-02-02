const MongoClient = require('mongodb').MongoClient;

let user = 'solonel';
let password = 'K4VMrR2YFqovfQU2';
let db = 'TodoApp';

const uri = `mongodb+srv://${user}:${password}@solonel-ppryc.mongodb.net/${db}`;

MongoClient.connect(uri, function (err, client) {
    if (err) {
        return console.error('Unable to connect : ', err)
    }

    const TodoAppDb = client.db('TodoApp');

    TodoAppDb.collection('Todos').insertOne({ text: 'It s something', completed: false }, (err, result) => {

        if (err) {
            return console.error('Unable to insert :', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    TodoAppDb.collection('Users').insertOne({ name: 'LE METOUR', age: 25, location: 'FRANCE' }, (err, result) => {

        if (err) {
            return console.error('Unable to insert :', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    client.close();
});