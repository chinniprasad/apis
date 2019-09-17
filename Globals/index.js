const eventEmitter = require('events');
const mongoose = require('mongoose');

global.connectedMongoEmitter = new eventEmitter();
//global.db = mongoose.createConnection(`mongodb+srv://prasad:Chinni8335**@learning-591um.mongodb.net/pranathi?retryWrites=true&w=majority`)
global.db = mongoose.createConnection('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
 db.once('open', () => {
   console.log("DB :> connection established successfully")
   connectedMongoEmitter.emit('connectedMongoDB')
});
