const mongoose = require('mongoose');
const uri = "mongodb+srv://rogeralexei:Laura1311@tasks.rzadnbk.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connection successful");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

const db = mongoose.connection;

module.exports = {
  db
};