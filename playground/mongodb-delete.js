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

    // delete Many
    // TodoAppDb.collection('Todos').deleteMany(
    //     { completed: true }
    // ).then((result) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(result, undefined, 2))
    // }, (err) => {
    //     console.error(err);
    // });

    TodoAppDb.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
        //console.log(`Todos deleted ${result}`);
        console.log(result);
        
    }, (err) => {
        console.error(err);
    });





    //client.close();
});