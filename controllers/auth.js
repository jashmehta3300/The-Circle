// @desc        register user
// @route       POST api/v1/auth/register
// @access      public
exports.registerUser = (req, res, next) => {
    res.status(200).json({
        success: true
    });
};

// @desc        user login
// @route       POST api/v1/auth/login
// @access      public
exports.loginUser = (req, res, next) => {
    res.status(200).json({
        success: true
    });
};