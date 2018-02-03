const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = "5a7625d20e23eb3aa0e0013ad";

if (!ObjectID.isValid(id)) {
    return console.error("Unvalid ID")
}

Todo.findById(id).then((todo) => {
    console.log('findById', todo);
}).catch((e) => {
    console.error(e);
});
// Todo.find({ _id: id }).then((todos) => {
//     console.log('find', todos);
// });

// Todo.findOne({ _id: id }).then((todo) => {
//     console.log('findOne', todo);
// });


