const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    email: String,
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.id;
    }
});

userSchema.findById = function (cb) {
    return this.model('Users').find({ id: this.id }, cb);
};

const User = mongoose.model('Users', userSchema);


exports.findByEmail = (email) => {
    return User.find({ email: email });
};

exports.findById = (id) => {
    return User.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.deleteMany({ _id: userId }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

