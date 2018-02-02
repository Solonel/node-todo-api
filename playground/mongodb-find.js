const { MongoClient, ObjectID } = require('mongodb');

let user = 'solonel';
let password = 'K4VMrR2YFqovfQU2';
let db = 'TodoApp';

const uri = `mongodb+srv://${user}:${password}@solonel-ppryc.mongodb.net/${db}`;

MongoClient.connect(uri, function (err, client) {
    if (err) {
        return console.error('Unable to connect : ', err)
    }

    const TodoAppDb = client.db('TodoApp');

    // TodoAppDb.collection('Todos').find({
    //     _id: new ObjectID('5a741b662789a3090c29d61d')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.error(err);
    // });

    // TodoAppDb.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count  ${count}`);
    // }, (err) => {
    //     console.error(err);
    // });

    client.close();
});