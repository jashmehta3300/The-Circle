const CastVote = require('../models/castVote');

exports.castVote = async(req, res, next) => {
    const { name, aadharNo, vote } = req.body;

    //Check if Aadhar & vote are present
    if (!aadharNo || !vote) {
        res.status(401).json({
            success: false,
            reason: 'False credentials'
        });
    }

    const voter = await CastVote.create({
        name,
        aadharNo,
        vote
    });

    res.status(200).json({
        success: true,
        data: voter
    });
};