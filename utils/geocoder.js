const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'mapquest',
    httpAdapter: 'https',
    apiKey: '9WdA1NAxSCEoZGGel8u87HAxeAAbcspG',
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;