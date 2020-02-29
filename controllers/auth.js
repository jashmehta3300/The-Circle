const User = require('../models/auth');

// @desc        register user
// @route       POST api/auth/register
// @access      public
exports.registerUser = async(req, res, next) => {
    const { name, mobileNo, aadharNo, password, address } = req.body;

    const existingUser = await User.findOne({ aadharNo });

    if (existingUser) {
        res.status(401).json({
            success: false,
            reason: 'Aadhar Number is already registered'
        });
    } else {
        // Create user
        const user = await User.create({
            name,
            mobileNo,
            aadharNo,
            password,
            address
        });
        res.status(200).json({
            success: true,
            data: user
        });
    }
};

// @desc        user login
// @route       POST api/auth/login
// @access      public
exports.loginUser = async(req, res, next) => {
    const { name, password } = req.body;

    // Validate emil & password
    if (!name || !password) {
        res.status(401).json({
            success: false,
            reason: 'False credentials'
        });
    }

    // Check for user
    const user = await User.findOne({ name }).select('+password');

    if (!user) {
        res.status(401).json({
            success: false,
            reason: 'False credentials'
        });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        res.status(401).json({
            success: false,
            reason: 'False credentials'
        });
    }

    res.status(200).json({
        success: true
    });
};