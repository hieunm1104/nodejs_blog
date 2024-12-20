const mongoose = require('mongoose');

async function dbConnect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/education_dev');
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { dbConnect };
