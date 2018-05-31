/**
 * Created by submukherjee on 5/31/2018.
 */

const geoService = require('./geoService');
const weather = require('./weather');

geoService.getCorordinates('belgharia').then((result) => {
    //console.log(result.results[0].geometry.location.lat + "aaa" + result.results[0].geometry.location.lng );
    weather.getWeather(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng).then((wthrResult) => {
            console.log(JSON.stringify(wthrResult));
}, (error) => {
    console.log(`Weather details : ${JSON.stringify(error)}`);
} );

        },
(error) => {
    console.log(`Location details : ${JSON.stringify(error)}`);
});


