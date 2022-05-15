const mongoose = require('mongoose');

mongoose.connection.close();
//Set up default mongoose connection
const mongoDB = process.env.DATABASE_URI;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
const db = mongoose.connection;

db.on('open', () => console.log('Database has been connected'));
//Bind connection to error event (to get notification of connection errors)
db.on('error', () => {
  console.error.bind(console, 'MongoDB connection error:');
  db.close();
});
