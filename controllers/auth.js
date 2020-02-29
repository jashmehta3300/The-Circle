const User = require('../models/auth');

// @desc        register user
// @route       POST api/auth/register
// @access      public
exports.registerUser = async(req, res, next) => {
    const { name, mobileNo, aadharNo, password } = req.body;

    const existingUser = User.find({
        aadharNo: aadharNo
    });

    if (!existingUser) {
        // Create user
        const user = await User.create({
            name,
            mobileNo,
            aadharNo,
            password
        });
    } else {
        res.status(401).json({
            success: false,
            reason: 'Aadhar Number is already registered'
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
};

// @desc        user login
// @route       POST api/auth/login
// @access      public
exports.loginUser = (req, res, next) => {
    const user = req.body;

    res.status(200).json({
        success: true,
        data: user
    });
};