const mongoose = require('mongoose');
const config = require('../config');

module.exports = {
    connect: (onSuccess) => {
        mongoose.connect(config.mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
            .then(onSuccess)
            .catch(err => {
                console.log(`Error connecting to mongo:`, err);
            });
    }
};