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

    TodoAppDb.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5a74d32c2067dd2a2c87fb97') },
        {
            $set: { completed: true }
        }, { returnOriginal: false }).then((result) => {
            console.log(result);
        }, (err) => {
            console.error(err);
        });

    client.close();
});