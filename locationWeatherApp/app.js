/**
 * Created by submukherjee on 5/31/2018.
 */

const geoService = require('./geoService');

geoService.getCorordinates('belgharia').then((result) => {
    console.log(JSON.stringify(result.results[0].geometry.location));
        },
(error) => {
    console.log(JSON.stringify(error));
});


