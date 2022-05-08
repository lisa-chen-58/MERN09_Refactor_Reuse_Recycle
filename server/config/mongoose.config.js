const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/E04_Refactor_Reuse_Recycle", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database! Yay!"))
    .catch(err => console.log("Something went wrong when connecting to the database, uh oh", err));