module.exports = {
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
    mutipleMongooseToObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
};
