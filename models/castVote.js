const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const VoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    aadharNo: {
        type: String,
        required: [true, 'Error in fetching aadhar number of candidate']
    },
    vote: {
        type: String,
        required: [true, 'Please cast your vote'],
        enum: ['BJP', 'Congress', 'AAP', 'CPI']
    }
});

// Encrypt password using bcrypt
VoteSchema.pre('save', async function(next) {
    if (!this.isModified('aadharNo')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.aadharNo = await bcrypt.hash(this.aadharNo, salt);
});

module.exports = mongoose.model('CastVote', VoteSchema);