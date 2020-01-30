require('dotenv').config();

module.exports = {
    port: process.env.PORT || 8080,
    mongo: {
        uri: process.env.MONGO_URI || "mongodb://localhost:27017/dblandit"
    }
};