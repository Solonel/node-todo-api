const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.error('Unable to connect :', err);
    }
    console.log('Connect to MongoDB');

    // db.collection('Todos').insertOne({ text: 'It s something', completed: false }, (err, result) => {

    //     if (err) {
    //         return console.error('Unable to insert :', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    db.collection('Users').insertOne({ nqme: 'LE METOUR', age: 25, location: 'FRANCE' }, (err, result) => {

        if (err) {
            return console.error('Unable to insert :', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });

    db.close();
});