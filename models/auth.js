const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    aadharNo: {
        type: String,
        required: [true, 'Please enter your Aadhar Number']
    },
    mobileNo: {
        type: Number,
        minlength: 10,
        match: [
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            'Please add a valid Mobile Number'
        ],
        required: [true, 'Please enter your registered Mobile Number']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    }
});

module.exports = mongoose.model('User', userSchema);